import { TrsNode } from '../types/index';
function render(trsNode: TrsNode, container: HTMLElement | null) {
    let root = container ?? document.body;

    if (typeof trsNode === 'string') {
        let txt = document.createTextNode(trsNode);
        root.appendChild(txt);
        return;
    }

    // 对 children 生成的虚拟dom进行处理
    if (typeof trsNode === 'object' && trsNode instanceof Array) {
        trsNode.forEach((child: TrsNode) => {
            render(child, root);
        });
        return;
    }

    if (typeof trsNode.type === 'string') {
        let element = document.createElement(trsNode.type);

        trsNode.children.forEach((child: TrsNode) => {
            render(child, element);
        });

        root.appendChild(element);
    } else if (trsNode.type?.isComponent) {
        let comp = new trsNode.type();
        trsNode.children.forEach((child: TrsNode) => {
            comp.appendChild(child);
        });
        render(comp.render(), root);
    } else {
        const fun = trsNode.type();
        render(fun, root);
    }
}

export default render;

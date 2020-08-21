import { TrsNode } from '../types/index';

class Component {
    children: TrsNode[];
    constructor() {
        this.children = [];
    }

    static isComponent = true;

    appendChild(child: TrsNode): void {
        this.children.push(child);
    }

    render(): TrsNode {
        return;
    }
}

export default Component;

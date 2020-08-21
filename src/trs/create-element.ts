import { CElement, TrsNode } from '../types/index';

function createElement(type: string, props: Record<string, any>, ...children: TrsNode[]): CElement {
    console.debug(arguments);
    return {
        type,
        props,
        children
    };
}

export default createElement;

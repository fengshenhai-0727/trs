export type CElement = {
    type: string | any;
    props: Record<string, any>;
    children: TrsNode[];
};

export type TrsNode = CElement | any;

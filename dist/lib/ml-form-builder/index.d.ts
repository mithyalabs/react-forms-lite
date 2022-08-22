import * as React from 'react';
import { BuilderProps, FormRowProps } from './types';
export declare const getComponentConfig: (type: string) => {
    component: JSX.Element;
    props?: object | undefined;
};
export declare const attachField: (type: string | string[], component: JSX.Element, props?: object | undefined) => void;
export declare const setDefaultProps: (type: string | string[], props: object) => void;
export declare const BuildFormRow: React.FC<FormRowProps>;
export declare const MLFormContent: React.FC<BuilderProps>;
export declare const MLFormBuilder: React.FC<BuilderProps>;
export default MLFormBuilder;

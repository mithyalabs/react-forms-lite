import * as React from 'react';
import { IFieldProps } from '../index';
interface IOptionProps {
    name?: string;
    value?: string;
}
interface IFProps {
    id: string;
    name: string;
    label?: string;
    options?: IOptionProps[];
    class?: string;
    helperText?: string;
}
interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export declare const Checkbox: React.FC<IProps>;
export default Checkbox;

import React from 'react';
import { IFieldProps } from '..';
interface IOptionProps {
    name?: string;
    value?: string;
}
interface IFProps {
    id: string;
    name: string;
    label?: string;
    options?: IOptionProps[];
    placeholder?: string;
    class?: string;
    helperText?: string;
}
interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export declare const Select: React.FC<IProps>;
export default Select;

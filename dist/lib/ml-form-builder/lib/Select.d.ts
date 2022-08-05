import React from 'react';
import { IFieldProps } from "..";
interface IOptionProps {
    name: string;
    value: string;
}
interface IFProps {
    options: IOptionProps[];
    name: string;
    id: string;
}
interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export declare const Select: React.FC<IProps>;
export default Select;

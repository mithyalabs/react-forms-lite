import React from 'react';
import { IFieldProps } from '..';
interface IFProps {
    id: string;
    name: string;
    type: string;
    label?: string;
    multiline?: boolean;
    placeholder?: string;
    class?: string;
    helperText?: string;
}
interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export declare const TextField: React.FC<IProps>;
export default TextField;

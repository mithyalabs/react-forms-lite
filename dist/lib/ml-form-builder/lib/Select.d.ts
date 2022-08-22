<<<<<<< HEAD
import React from 'react';
import { IFieldProps, ISelectProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: ISelectProps;
}
export declare const Select: React.FC<IProps>;
export default Select;
=======
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
>>>>>>> 2e599a4361462a35db61f7dd82b0a4788d00a3ff

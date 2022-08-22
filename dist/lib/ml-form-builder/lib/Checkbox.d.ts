<<<<<<< HEAD
import * as React from 'react';
import { IFieldProps, IRadioCheckboxProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: IRadioCheckboxProps;
}
export declare const Checkbox: React.FC<IProps>;
export default Checkbox;
=======
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
>>>>>>> 2e599a4361462a35db61f7dd82b0a4788d00a3ff

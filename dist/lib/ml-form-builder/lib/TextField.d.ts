<<<<<<< HEAD
import React from 'react';
import { IFieldProps, ITextfieldProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: ITextfieldProps;
}
export declare const TextField: React.FC<IProps>;
export default TextField;
=======
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
>>>>>>> 2e599a4361462a35db61f7dd82b0a4788d00a3ff

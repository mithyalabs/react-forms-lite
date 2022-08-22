import React from 'react';
import { IFieldProps, ITextfieldProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: ITextfieldProps;
}
export declare const TextField: React.FC<IProps>;
export default TextField;

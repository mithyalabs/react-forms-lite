import React from 'react';
import { IFieldProps, ISelectProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: ISelectProps;
}
export declare const Select: React.FC<IProps>;
export default Select;

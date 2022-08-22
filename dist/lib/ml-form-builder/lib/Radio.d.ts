import * as React from 'react';
import { IFieldProps, IRadioCheckboxProps } from '../types';
interface IProps extends IFieldProps {
    fieldProps?: IRadioCheckboxProps;
}
export declare const Radio: React.FC<IProps>;
export default Radio;

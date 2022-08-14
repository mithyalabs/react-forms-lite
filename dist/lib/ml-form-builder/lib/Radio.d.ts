import * as React from 'react';
import { IFieldProps } from '../index';
interface IRadioProps {
    name?: string;
    value?: string;
}
interface IFProps {
    id: string;
    name: string;
    label?: string;
    options?: IRadioProps[];
    placeholder?: string;
}
interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export declare const Radio: React.FC<IProps>;
export default Radio;

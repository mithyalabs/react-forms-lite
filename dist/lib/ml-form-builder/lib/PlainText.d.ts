import { FC } from 'react';
import { IFieldProps, PlainTextFieldProps } from '../types';
interface PlainTextProps extends IFieldProps {
    fieldProps?: PlainTextFieldProps;
}
export declare const PlainText: FC<PlainTextProps>;
export default PlainText;

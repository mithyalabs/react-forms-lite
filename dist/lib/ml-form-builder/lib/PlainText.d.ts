import { FC } from 'react';
import { IFieldProps } from '..';
export interface PlainTextFieldProps {
    text?: string | JSX.Element;
    class?: string;
}
export interface PlainTextProps extends IFieldProps {
    fieldProps?: PlainTextFieldProps;
}
export declare const PlainText: FC<PlainTextProps>;
export default PlainText;

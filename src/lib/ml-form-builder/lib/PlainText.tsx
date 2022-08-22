import React, { FC } from 'react';
import { IFieldProps, PlainTextFieldProps } from '../types';

interface PlainTextProps extends IFieldProps {
    fieldProps?: PlainTextFieldProps;
}

export const PlainText: FC<PlainTextProps> = (props) => {
    const { fieldProps = {} as PlainTextFieldProps } = props;
    const { text = '' } = fieldProps;
    return <div>{text}</div>;
};

export default PlainText;

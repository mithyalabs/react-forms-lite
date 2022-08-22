import React from 'react';
import { FormikProps } from 'formik';
import { get } from 'lodash';
import { IFieldProps, ITextfieldProps } from '../types';
import { valueStyle } from '../style';
import Label, { HelperText } from '../Utils';
// import { getFieldError } from "../Utils";

interface IProps extends IFieldProps {
    fieldProps?: ITextfieldProps;
}

export const TextField: React.FC<IProps> = (props) => {
    const { fieldProps = {} as ITextfieldProps, formikProps = {} as FormikProps<any> } = props;

    const updatedProps = {
        ...fieldProps,
        onChange: formikProps.handleChange,
        onBlur: formikProps.handleBlur,
        value: getFieldValue(formikProps, fieldProps.name || ''),
        className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : ''),
    };

    return (
        <div style={{ display: 'flex', flexDirection: fieldProps.labelOrientation == 'landscape' ? 'row' : 'column' }}>
            {updatedProps.label && <Label id={updatedProps.id} label={updatedProps.label} />}

            {!updatedProps.multiline ? (
                <div style={valueStyle as React.CSSProperties}>
                    <input
                        className={updatedProps.className}
                        id={updatedProps.id}
                        type={updatedProps.type}
                        placeholder={updatedProps.placeholder || updatedProps.label || ''}
                        value={updatedProps.value}
                        onChange={updatedProps.onChange}
                        onBlur={updatedProps.onBlur}
                    />
                    {updatedProps.helperText && <HelperText text={updatedProps.helperText} />}
                </div>
            ) : (
                <div style={valueStyle as React.CSSProperties}>
                    <textarea
                        className={updatedProps.className}
                        id={updatedProps.id}
                        placeholder={updatedProps.placeholder || updatedProps.label}
                        value={updatedProps.value}
                        onChange={updatedProps.onChange}
                        onBlur={updatedProps.onBlur}
                    ></textarea>
                    {updatedProps.helperText && <HelperText text={updatedProps.helperText} />}
                </div>
            )}
        </div>
    );
};

export default TextField;

const getFieldValue = (formikProps: FormikProps<any>, name: string) => {
    let value = get(formikProps, `values.${name}`);
    if (value === null || value === undefined || value === false) return '';
    return value;
};

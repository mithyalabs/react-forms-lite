import React from 'react';
import { FormikProps } from 'formik';
import { get } from 'lodash';
import { IFieldProps } from '..';
import { valueStyle } from '../style';
// import { getFieldError } from "../Utils";

interface IFProps {
    id: string;
    name: string;
    type: string;
    label?: string;
    multiline?: boolean;
    placeholder?: string;
    class?: string;
    helperText?: string;
    labelOrientation?: string;
}

interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}

export const TextField: React.FC<IProps> = (props) => {
    const { fieldProps = {} as IFProps, formikProps = {} as FormikProps<any> } = props;
    console.log(props);

    const updatedProps = {
        ...fieldProps,
        onChange: formikProps.handleChange,
        onBlur: formikProps.handleBlur,
        value: getFieldValue(formikProps, fieldProps.name || ''),
        className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : ''),
    };

    return (
        <div style={{ display: 'flex', flexDirection: fieldProps.labelOrientation == 'landscape' ? 'row' : 'column' }}>
            {updatedProps.label && (
                <label htmlFor={updatedProps.id} className="mainLabel">
                    {updatedProps.label}
                </label>
            )}

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
                    {updatedProps.helperText && <div className="helperText">{updatedProps.helperText}</div>}
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
                    {updatedProps.helperText && <div className="helperText">{updatedProps.helperText}</div>}
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

import { FormikProps } from 'formik';
import React from 'react';
import { IFieldProps } from '..';
import { get } from 'lodash';
import { valueStyle } from '../style';

interface IOptionProps {
    name?: string;
    value?: string;
}

interface IFProps {
    id: string;
    name: string;
    label?: string;
    options?: IOptionProps[];
    placeholder?: string;
    class?: string;
    helperText?: string;
    labelOrientation?: string;
}

interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export const Select: React.FC<IProps> = (props) => {
    const { formikProps = {} as FormikProps<unknown>, fieldProps = {} as IFProps } = props;
    const value = get(formikProps, `values.${fieldProps.name}`);
    const updatedProps = {
        ...fieldProps,
        id: fieldProps.id,
        label: fieldProps.label,
        name: fieldProps.name,
        options: fieldProps.options,
        placeholder: fieldProps.placeholder,
        className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : ''),
    };

    return (
        <div style={{ display: 'flex', flexDirection: fieldProps.labelOrientation == 'landscape' ? 'row' : 'column' }}>
            {updatedProps.label && (
                <label htmlFor={updatedProps.id} className="mainLabel">
                    {updatedProps.label}
                </label>
            )}

            <div style={valueStyle as React.CSSProperties}>
                <select
                    className={updatedProps.className}
                    id={updatedProps.id}
                    defaultValue=""
                    value={value}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                >
                    <option disabled value="">
                        {updatedProps.placeholder || updatedProps.label || ''}
                    </option>
                    {updatedProps.options &&
                        updatedProps.options.map((option) => {
                            return typeof option === 'string' ? (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            ) : (
                                <option value={option.value} key={option.value}>
                                    {option.name}
                                </option>
                            );
                        })}
                </select>
                {updatedProps.helperText && <div className="helperText">{updatedProps.helperText}</div>}
            </div>
        </div>
    );
};

export default Select;

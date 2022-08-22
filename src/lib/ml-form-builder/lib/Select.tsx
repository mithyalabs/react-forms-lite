import { FormikProps } from 'formik';
import React from 'react';
import { IFieldProps, ISelectProps } from '../types';
import { get } from 'lodash';
import { valueStyle } from '../style';
import Label, { HelperText } from '../Utils';

interface IProps extends IFieldProps {
    fieldProps?: ISelectProps;
}
export const Select: React.FC<IProps> = (props) => {
    const { formikProps = {} as FormikProps<unknown>, fieldProps = {} as ISelectProps } = props;
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
            {updatedProps.label && <Label id={updatedProps.id} label={updatedProps.label} />}

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
                {updatedProps.helperText && <HelperText text={updatedProps.helperText} />}
            </div>
        </div>
    );
};

export default Select;

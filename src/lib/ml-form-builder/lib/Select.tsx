import { FormikProps } from 'formik';
import React from 'react'
import { IFieldProps } from "..";
import { get } from 'lodash';

interface IOptionProps {
    name?: string,
    value?: string,
}

interface IFProps {
    id: string,
    name: string,
    label?: string,
    options?: IOptionProps[],
    placeholder?: string
}

interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export const Select: React.FC<IProps> = (props) => {
    const {
        formikProps = {} as FormikProps<unknown>,
        fieldProps = {} as IFProps,
    } = props;
    const value = get(formikProps, `values.${fieldProps.name}`);
    const updatedProps = {
        id: fieldProps.id,
        label: fieldProps.label,
        name: fieldProps.name,
        options: fieldProps.options,
        placeholder: fieldProps.placeholder,
    }


    return (
        <div style={{ display: "flex" }}>

            {updatedProps.label && <label
                style={labelStyle}
                htmlFor={updatedProps.id}>
                {updatedProps.label}
            </label>}

            <select
                className={updatedProps.name}
                id={updatedProps.id}
                defaultValue=""
                value={value}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                style={selectStyle}>

                <option disabled value="">
                    {updatedProps.placeholder || updatedProps.label || ''}
                </option>
                {updatedProps.options && updatedProps.options.map(option => {
                    return (
                        typeof (option) === 'string' ?
                            <option value={option} key={option}>
                                {option}
                            </option> :
                            < option value={option.value} key={option.value}>
                                {option.name}
                            </option>
                    )
                })}

            </select >
        </div >
    )
}

export default Select

const labelStyle = {
    marginRight: "10px"
}

const selectStyle = {
    flexGrow: "1",
    height: "100%",
    cursor: "pointer"
}
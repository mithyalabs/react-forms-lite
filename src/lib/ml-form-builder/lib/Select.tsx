import { FormikValues } from 'formik';
import React from 'react'
import { IFieldProps } from "..";
import { get } from 'lodash';

interface IOptionProps {
    name: string,
    value: string
}

interface IFProps {
    options: IOptionProps[],
    name: string,
    id: string
}

interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}
export const Select: React.FC<IProps> = (props) => {
    // console.log(props);
    const {
        formikProps = {} as FormikValues,
        fieldProps = {} as IFProps,
        // isReadOnly = false 
    } = props;
    const value = get(formikProps, `values.${fieldProps.name}`);
    const updatedProps = {
        options: fieldProps.options,
        id: fieldProps.id,
        name: fieldProps.name
    }

    // console.log(updatedProps);


    return (
        <select
            className={updatedProps.name}
            id={updatedProps.id}
            value={value}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}>

            {updatedProps.options.map(option => {
                return (
                    < option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                );
            })}

        </select >
    )
}

export default Select
import { FormikProps } from 'formik';
import * as React from 'react';
import { IFieldProps, IRadioCheckboxProps } from '../types';
import Label, { HelperText } from '../Utils';
// import { getFieldError, getMenuOptions, MenuOptionObject, MenuOptions } from '../Utils';

interface IProps extends IFieldProps {
    fieldProps?: IRadioCheckboxProps;
}

export const Radio: React.FC<IProps> = (props) => {
    const { formikProps = {} as FormikProps<unknown>, fieldProps = {} as IRadioCheckboxProps } = props;

    const updatedProps = {
        ...fieldProps,
        id: fieldProps.id,
        label: fieldProps.label,
        name: fieldProps.name,
        options: fieldProps.options,
        className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : ''),
    };

    // const { fieldProps = {} as IMUIRadioProps, formikProps = {} as FormikValues, isReadOnly = false } = props;

    // const fieldValue = get(formikProps, `values.${fieldProps.name}`) || '';

    return (
        <div style={{ display: 'flex', flexDirection: fieldProps.labelOrientation == 'landscape' ? 'row' : 'column' }}>
            {updatedProps.label && <Label id={updatedProps.id} label={updatedProps.label} />}

            {updatedProps.options && (
                <div className={updatedProps.className} id={updatedProps.id}>
                    {updatedProps.options.map((option) => {
                        return typeof option === 'string' ? (
                            <div key={option} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option}
                                    value={option} //radiogrp
                                />

                                <label htmlFor={option}>{option}</label>
                            </div>
                        ) : (
                            <div key={option.name} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option.name}
                                    value={option.value} //radiogrp
                                />

                                <label htmlFor={option.name}>{option.value}</label>
                            </div>
                        );
                    })}
                    {updatedProps.helperText && <HelperText text={updatedProps.helperText} />}
                </div>
            )}
        </div>
    );
};

export default Radio;

// typeof (radio) === 'string?
//     < div key = { radio } style = {{ display: "flex", alignItems: 'center' }}>
//                 <input
//                     type="radio"
//                     name={updatedProps.name}
//                     id={radio}
//                     value={radio}
//                     style={radioStyle} />
//                 <label htmlFor={radio}>
//                     {radio}
//                 </label>
//                 <br />:
// <div key={radio.name} style={{ display: "flex", alignItems: 'center' }}>
//     <input
//         type="radio"
//         name={updatedProps.name}
//         id={radio.name}
//         value={radio.value}
//         style={radioStyle} />
//     <label htmlFor={radio.name}>
//         {radio.value}
//     </label>
//     <br />
// </div>

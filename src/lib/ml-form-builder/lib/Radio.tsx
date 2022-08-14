import { FormikProps } from 'formik';
// import { get } from 'lodash';
import * as React from 'react';
import { IFieldProps } from '../index';
// import { getFieldError, getMenuOptions, MenuOptionObject, MenuOptions } from '../Utils';

interface IRadioProps {
    name?: string,
    value?: string
}

interface IFProps {
    id: string,
    name: string,
    label?: string,
    options?: IRadioProps[],
    placeholder?: string
}


interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}

export const Radio: React.FC<IProps> = (props) => {

    const {
        formikProps = {} as FormikProps<unknown>,
        fieldProps = {} as IFProps
    } = props;
    const updatedProps = {
        id: fieldProps.id,
        label: fieldProps.label,
        name: fieldProps.name,
        options: fieldProps.options,
        placeholder: fieldProps.placeholder,
    }

    // const { fieldProps = {} as IMUIRadioProps, formikProps = {} as FormikValues, isReadOnly = false } = props;

    // const fieldValue = get(formikProps, `values.${fieldProps.name}`) || '';

    return (
        <div style={{ display: "flex" }}>

            {updatedProps.label && <label
                style={labelStyle}
                htmlFor={updatedProps.id}>
                {updatedProps.label}
            </label>}

            {updatedProps.options && <div
                id={updatedProps.id}>
                {updatedProps.options.map(option => {
                    return (
                        typeof (option) === 'string' ?
                            <div key={option}
                                style={{ display: "flex", alignItems: 'center' }}>

                                <input
                                    type="radio"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option}
                                    value={option}  //
                                    style={radioStyle} />

                                <label htmlFor={option}>
                                    {option}
                                </label>

                            </div> :
                            <div key={option.name}
                                style={{ display: "flex", alignItems: 'center' }}>

                                <input
                                    type="radio"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option.name}
                                    value={option.value}  //
                                    style={radioStyle} />

                                <label htmlFor={option.name}>
                                    {option.value}
                                </label>

                            </div>
                    )
                })}
            </div>
            }
        </div>

    );
};


export default Radio;

const labelStyle = {
    marginRight: "10px"
}

const radioStyle = {
    marginRight: "10px"
}


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

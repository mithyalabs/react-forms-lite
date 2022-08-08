import React from 'react'
import { FormikProps } from "formik";
import { get } from "lodash";
import { IFieldProps } from "..";
// import { getFieldError } from "../Utils";

interface IFProps {
    id: string;
    name: string;
    type: string;
    label?: string;
    multiline?: boolean;
    placeholder?: string
}

interface IProps extends IFieldProps {
    fieldProps?: IFProps;
}

export const TextField: React.FC<IProps> = (props) => {
    const {
        fieldProps = {} as IFProps,
        formikProps = {} as FormikProps<any>,
    } = props;

    const updatedProps = {
        ...fieldProps,
        onChange: formikProps.handleChange,
        onBlur: formikProps.handleBlur,
        value: getFieldValue(formikProps, fieldProps.name || ''),
    }


    return (
        <div style={{ display: "flex" }}>
            {updatedProps.label && <label
                style={labelStyle}
                htmlFor={updatedProps.id}>
                {updatedProps.label}
            </label>}

            {!updatedProps.multiline ?
                <input
                    className={updatedProps.name}
                    id={updatedProps.id}
                    type={updatedProps.type}
                    placeholder={updatedProps.placeholder || updatedProps.label || ''}
                    value={updatedProps.value}
                    onChange={updatedProps.onChange}
                    onBlur={updatedProps.onBlur}
                    style={inputStyle}
                /> :
                <div
                    contentEditable="true"
                    style={textareaStyle}
                    placeholder={updatedProps.placeholder}
                    id={updatedProps.id}></div>
                // <textarea class='autoExpand' rows='3' data-min-rows='3' placeholder='Auto-Expanding Textarea' autofocus></textarea>  
                // <textarea
                //     className={updatedProps.name}
                //     id={updatedProps.id}
                //     placeholder={updatedProps.placeholder || updatedProps.label}
                //     value={updatedProps.value}
                //     onChange={updatedProps.onChange}
                //     onBlur={updatedProps.onBlur}
                //     style={textareaStyle}>
                // </textarea>
            }
        </div>
    )
}

export default TextField

const getFieldValue = (formikProps: FormikProps<any>, name: string) => {
    let value = get(formikProps, `values.${name}`);
    if (value === null || value === undefined || value === false)
        return '';
    return value;
};

const labelStyle = {
    marginRight: "10px",
}

const inputStyle = {
    flexGrow: "1",
    height: "100%",
    padding: "2px"
}

const textareaStyle = {
    flexGrow: "1",
    overflow: "hidden",
    border: "1px solid rgb(119,119,119)",
    minHeight: "40px",
    padding: "2px"
}

// function getScrollHeight(elm: HTMLSelectElement) {
//     var savedValue = elm.value
//     elm.value = ''
//     elm._baseScrollHeight = elm.scrollHeight
//     elm.value = savedValue
// }

// function onExpandableTextareaInput({ target: elm }) {
//     if (!elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA') return

//     var minRows = elm.getAttribute('data-min-rows') | 0, rows;
//     !elm._baseScrollHeight && getScrollHeight(elm)

//     elm.rows = minRows
//     rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
//     elm.rows = minRows + rows
// }
// document.addEventListener('input', onExpandableTextareaInput)
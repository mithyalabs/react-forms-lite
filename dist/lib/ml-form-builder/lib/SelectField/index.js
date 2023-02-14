import React from "react";
import { isString } from "lodash";
//import "./index.scss";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const SelectField = (props) => {
    const { formikProps = {}, fieldProps = {} } = props;
    const { name = "", label, options = [], emptyItem, nativeProps, classNames, disabled, } = fieldProps;
    const emptyItemText = isString(emptyItem) ? emptyItem : "No option selected";
    const optionList = emptyItem
        ? [{ value: "", name: emptyItemText }, ...options]
        : options;
    return (React.createElement("div", { className: clsx("select-field", classNames) },
        label && (React.createElement("label", { htmlFor: name, className: "select-field-label" }, label)),
        React.createElement("div", { className: "select-container" },
            React.createElement("select", { id: name, onChange: formikProps.handleChange, className: "select-option", disabled: disabled, ...nativeProps }, optionList.map((it) => {
                return (React.createElement("option", { key: it.value, value: it.value, ...nativeProps }, it.name));
            }))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
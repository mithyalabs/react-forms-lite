import { get } from "lodash";
import React from "react";
// import "./index.scss";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const TextField = (props) => {
    const { fieldProps = {}, formikProps = {}, } = props;
    const { label, name = "", type = "", classNames, placeholder, nativeProps, disabled, } = fieldProps;
    const fieldValue = get(formikProps, `values.${name}`);
    return (React.createElement("div", { className: clsx("text-field", classNames, name) },
        label && React.createElement("label", { className: "text-label" }, label),
        React.createElement("div", { className: clsx("text-field-box") },
            React.createElement("input", { className: clsx("input-box"), type: type, placeholder: `${placeholder || ""}`, name: name, value: fieldValue || "", onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled, ...nativeProps })),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
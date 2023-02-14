import React from "react";
//import "./index.scss";
import { get } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const Switch = (props) => {
    const { formikProps = {}, fieldProps = {}, } = props;
    const { label, name = "", classNames, nativeProps, disabled } = fieldProps;
    const fieldValue = get(formikProps, `values.${name}`);
    const handleOnChange = () => {
        formikProps.setFieldValue(`${name}`, !fieldValue);
    };
    return (React.createElement("div", { className: clsx("switch-field", classNames) },
        label && React.createElement("span", { className: "switch-label" }, label),
        React.createElement("label", { className: "switch-container" },
            React.createElement("input", { className: "slider", type: "checkbox", checked: !!fieldValue, value: fieldValue, onChange: handleOnChange, disabled: disabled, ...nativeProps }),
            React.createElement("span", { className: "slider round" })),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
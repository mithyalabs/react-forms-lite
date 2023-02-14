import { get } from "lodash";
import React from "react";
import "./index.scss";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const Radio = (props) => {
    const { formikProps = {}, fieldProps = {}, } = props;
    const { options = [], name = "", label, isColumn, classNames, nativeProps, disabled, } = fieldProps;
    const fieldValue = get(formikProps, `values.${name}`) || "";
    return (React.createElement("div", { className: clsx("radio-field", classNames) },
        label && React.createElement("span", { className: "radio-label" }, label),
        React.createElement("div", { className: clsx("radio-container", isColumn ? "isColumn" : undefined) }, options.map((it) => (React.createElement("span", { key: it.value, className: "radio-name" },
            React.createElement("input", { className: "radio-input", type: "radio", name: name, value: it.value, checked: fieldValue === it.value, onChange: formikProps.handleChange, disabled: disabled, ...nativeProps }),
            it.name)))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
import React from "react";
//import "./index.scss";
import { get, isEmpty, map } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const CheckBox = (props) => {
    const { formikProps = {}, fieldProps = {}, } = props;
    const { options = [], name = "", label, isColumn = false, classNames, nativeProps, disabled, booleanLabel } = fieldProps;
    const fieldValue = get(formikProps, `values.${name} ||  []`);
    const booleanValue = get(formikProps, `values.${name} `);
    return (React.createElement("div", { className: clsx("checkbox-field ", classNames) },
        label && React.createElement("span", { className: "checkbox-label" }, label),
        React.createElement("div", { className: clsx("checkbox-container", isColumn ? "isColumn" : undefined) }, (!isEmpty(options)) ?
            (map(options, (item, index) => {
                return (React.createElement("div", { key: `${item.value}-${index}`, className: "checkbox-name" },
                    React.createElement("input", { className: "checkbox-input", type: "checkbox", name: name, value: item.value, checked: fieldValue?.includes(item.value), onChange: formikProps.handleChange, disabled: disabled, ...nativeProps }),
                    item.name));
            })) : (React.createElement("div", { className: "checkbox-name" },
            React.createElement("input", { className: "checkbox-input", type: "checkbox", name: name, value: "false", checked: booleanValue, onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled, ...nativeProps }),
            booleanLabel))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
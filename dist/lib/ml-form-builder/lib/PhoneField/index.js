import React, { useEffect, useState } from "react";
import "./index.scss";
import { COUNTRY_LIST } from "../Constants/CountryList";
import { get } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export const PhoneField = (props) => {
    const { fieldProps = {}, formikProps = {}, } = props;
    const [code, setCode] = useState("");
    const handleRenderOption = (country, index) => {
        if (!country.dial_code)
            return null;
        return (React.createElement("option", { key: index, value: country.dial_code }, `${country.name} (${country.dial_code})`));
    };
    const { label, name = "", emptyItem, emptyItemText, countryCodeLabel, classNames, nativeProps, placeholder, disabled, renderOption = handleRenderOption, } = fieldProps;
    const value = (get(formikProps, `values.${name}`) || "");
    useEffect(() => {
        if (value) {
            setCode(value.split("-")[0] || "");
        }
    }, [name]);
    const onChange = (event) => {
        event.preventDefault();
        const number = event.target.value.replace("-", "");
        formikProps.setFieldValue(`${name}`, `${code}-${number}`);
    };
    const handleCodeChange = (e) => {
        const number = value.split("-");
        formikProps.setFieldValue(`${name}`, `${e.target.value}-${number[1] || ""}`);
        setCode(e.target.value);
    };
    return (React.createElement("div", { className: clsx("phone-field", classNames, name) },
        React.createElement("label", { className: "phone-field-label", id: name },
            countryCodeLabel || "Country Code",
            " ",
            label),
        React.createElement("div", { className: "phone-field-container" },
            React.createElement("div", { className: "phone-field-box" },
                React.createElement("select", { className: "phone-field-select", id: name, value: code, onChange: handleCodeChange, disabled: disabled },
                    emptyItem && React.createElement("option", { value: "" }, emptyItemText),
                    COUNTRY_LIST.map(renderOption))),
            React.createElement("input", { type: "tel", className: "phone-field-input", placeholder: `${placeholder || ""}`, name: name, onBlur: formikProps.handleBlur, autoComplete: "nope", value: value.split("-")[1] || "", onChange: onChange, disabled: disabled, ...nativeProps })),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
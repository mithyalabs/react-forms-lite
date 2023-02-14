import clsx from "clsx";
import React from "react";
import { getFieldError } from "../../Utils";
//import "./index.scss";
export const HelperText = (props) => {
    const { fieldProps = {}, formikProps = {}, } = props;
    const { name, helperText, classNames, } = fieldProps;
    const fieldError = getFieldError(name || "", formikProps);
    return (React.createElement("div", { className: clsx("text-error-helper-field", classNames, name) }, (fieldError || helperText) && (React.createElement("div", { className: "label-error" }, fieldError ? (React.createElement("span", { className: "error-text error" }, fieldError)) : (React.createElement("span", { className: "helper-text" },
        helperText,
        " "))))));
};
//# sourceMappingURL=index.js.map
import React from "react";
import { processFilesWithCallback, setValue, } from "../../Utils";
import clsx from "clsx";
//import "./index.scss";
import { HelperText } from "../HelperText";
export const FileInput = (props) => {
    const { formikProps = {}, fieldProps = {}, } = props;
    const { name = "", onDone, multiple, disableDefaultTooltip, accept, readAs, disabled, onFilesChange, nativeProps, encoding = "utf-8", label, classNames, } = fieldProps;
    const handleChange = (event) => {
        const files = event.target.files || new FileList();
        if (onFilesChange) {
            onFilesChange(files);
            setValue(files, formikProps, fieldProps);
        }
        processFilesWithCallback(files, (prop) => {
            const { imgs, rem } = prop;
            onDone?.(imgs, rem);
            const files = [].concat(imgs || []).concat(rem || []);
            setValue(files, formikProps, fieldProps);
        }, readAs, encoding);
    };
    return (React.createElement("div", { className: clsx("file-input-field", classNames) },
        label && (React.createElement("label", { htmlFor: name, className: "file-input-label" }, label)),
        React.createElement("div", { className: "upload-btn-wrapper" },
            React.createElement("input", { className: "file-input-box", type: "file", onChange: handleChange, id: name, disabled: disabled, multiple: multiple, title: disableDefaultTooltip ? " " : undefined, accept: accept, ...nativeProps }),
            React.createElement("button", { className: "btn", type: "button" }, "Upload")),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map
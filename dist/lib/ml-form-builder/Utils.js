import { map, isString, get } from "lodash";
export const getMenuOptions = (options) => {
    return map(options, (item) => {
        if (isString(item))
            return { name: item, value: item };
        return item;
    });
};
export const getFieldError = (fieldName, formikProps) => {
    const fieldError = get(formikProps, `errors.${fieldName}`);
    const isTouched = get(formikProps, `touched.${fieldName}`);
    if (!isTouched && formikProps.submitCount < 1)
        return "";
    return fieldError;
};
export const processFilesWithCallback = (files, callback, readAs, encoding) => {
    const imgFiles = [];
    const remFiles = [];
    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1024) + " kB",
                base64: file.type.includes("image") ? reader.result : null,
                file: file,
            };
            if (file.type.includes("image")) {
                imgFiles.push(fileInfo);
            }
            else {
                remFiles.push(file);
            }
            if (imgFiles.length + remFiles.length === files.length) {
                callback({ imgs: imgFiles, rem: remFiles });
            }
        };
        reader[readAs || "readAsDataURL"](file, encoding);
        // This works but remember only readAsText can take encoding as a parameter. Might want to mention this in the documentation.
    });
};
export const setValue = (value, formikProps, fieldProps) => {
    formikProps.setFieldValue(get(fieldProps, "name"), value);
};
const ComponentMapConfig = {};
export const getComponentConfig = (type) => {
    return ComponentMapConfig[type];
};
//# sourceMappingURL=Utils.js.map
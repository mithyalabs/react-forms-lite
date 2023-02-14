import React from "react";
import { get } from "lodash";
import "./index.scss";
import { FieldArray } from "formik";
import { getComponentConfig } from "../../index";
import clsx from "clsx";
export const ArrayField = (props) => {
    const { fieldProps = {}, formikProps = {}, } = props;
    const { addButtonText = "Add", label, name = "", itemType, addButton, removeButton, onAddButtonClick, onRemoveButtonClick, arrayItemFieldProps = {}, defaultItemValue = "", classNames, nativeProps, fieldArrayLabel, } = fieldProps;
    const values = get(formikProps, `values.${name}`);
    const itemComponentConfig = getComponentConfig(itemType);
    const handleElementAdd = async (arrayHelpers) => {
        if (!onAddButtonClick) {
            arrayHelpers.push(defaultItemValue);
            return;
        }
        const res = await onAddButtonClick();
        if (res) {
            arrayHelpers.push(res ?? {});
        }
    };
    const handleElementRemove = async (arrayHelpers, index) => {
        if (!onRemoveButtonClick) {
            arrayHelpers.remove(index);
            return;
        }
        const isRemoved = await onRemoveButtonClick(index);
        if (isRemoved)
            arrayHelpers.remove(index);
    };
    return (React.createElement("div", { className: clsx("array-field", classNames) },
        fieldArrayLabel && React.createElement("label", { className: "field-array-container-label" }, fieldArrayLabel),
        label && (React.createElement("label", { className: "field-array-label" }, label)),
        React.createElement(FieldArray, { name: name, render: (arrayHelpers) => (React.createElement("div", null,
                (values || []).map((index) => (React.createElement("div", { key: `${fieldProps.name}-${index}`, className: "field-array-box" },
                    React.cloneElement(itemComponentConfig.component, {
                        name: fieldProps.name,
                        key: `${fieldProps.name}-${index}`,
                        itemIndex: index,
                        arrayHelpers,
                        formikProps,
                        fieldProps: {
                            ...arrayItemFieldProps,
                            name: `${name}[${index}]`,
                        },
                        ...itemComponentConfig.props,
                        ...nativeProps,
                    }),
                    removeButton ? (removeButton) : (React.createElement("button", { className: "array-remove-icon", onClick: () => handleElementRemove(arrayHelpers, index) }, React.createElement("p", { style: { fontSize: "8px" } }, "\u274C")))))),
                addButton ? (addButton) : (React.createElement("button", { type: "button", className: "array-add-icon", onClick: () => handleElementAdd(arrayHelpers) }, addButtonText)))) })));
};
//# sourceMappingURL=index.js.map
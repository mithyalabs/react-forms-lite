import clsx from "clsx";
import { get, isArray, isFunction, map, uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import { CheckBox } from "./lib/CheckBox";
import { Radio } from "./lib/Radio";
import { SelectField } from "./lib/SelectField";
import { Switch } from "./lib/Switch";
import { FileInput } from "./lib/FileInput";
import { PhoneField } from "./lib/PhoneField";
import { ArrayField } from "./lib/FieldArray";
import { TextField } from "./lib/TextField";
import "../../assets/index-1cc597f8.css";
import { getConditionalProps, } from "./lib/ConditionalOperations";
const ComponentMapConfig = {};
export const getComponentConfig = (type) => {
    return ComponentMapConfig[type];
};
export const attachField = (type, component, props) => {
    if (isArray(type)) {
        map(type, (item) => (ComponentMapConfig[item] = { component, props }));
    }
    else
        ComponentMapConfig[type] = { component, props };
};
export const setDefaultProps = (type, props) => {
    if (isArray(type)) {
        map(type, (item) => (ComponentMapConfig[item].props = {
            ...ComponentMapConfig[item].props,
            ...props,
        }));
    }
    else if (ComponentMapConfig[type])
        ComponentMapConfig[type].props = {
            ...ComponentMapConfig[type]?.props,
            ...props,
        };
};
attachField("select", React.createElement(SelectField, null));
attachField("checkbox", React.createElement(CheckBox, null));
attachField("switch", React.createElement(Switch, null));
attachField("radio", React.createElement(Radio, null));
attachField("file", React.createElement(FileInput, null));
attachField("phone", React.createElement(PhoneField, null));
attachField("array", React.createElement(ArrayField, null));
attachField("password", React.createElement(TextField, null), { type: "password" });
attachField("text", React.createElement(TextField, null), { type: "text" });
export const BuildFormRow = (props) => {
    const { schema, rowId, formikProps = {}, settings = {
        horizontalSpacing: 10,
        verticalSpacing: 10,
        columnHorizontalPadding: 0,
        isReadOnly: false,
    }, } = props;
    const columnItems = get(schema, "columns");
    const rowSettings = {
        ...settings,
    };
    const colItems = isArray(schema)
        ? schema
        : isArray(columnItems)
            ? columnItems
            : [schema];
    const rowStyle = { marginBottom: rowSettings.verticalSpacing || 10 };
    return (React.createElement("div", { className: "row", style: rowStyle }, map(colItems, (item, index) => {
        const componentConfig = ComponentMapConfig[item.type];
        const horizontalSpacing = index === colItems.length - 1
            ? 0
            : rowSettings.horizontalSpacing || 10;
        if (!componentConfig)
            return React.createElement("div", { key: `${rowId}_field_${index}` });
        const conditionalProps = getConditionalProps(item, formikProps);
        const fieldProps = {
            id: item.id,
            name: item.name || item.valueKey,
            ...componentConfig.props,
            ...item.fieldProps,
            ...conditionalProps.finalProps,
        };
        const Component = componentConfig.component;
        if (conditionalProps.hidden === true)
            return React.createElement("div", { key: `${rowId}_field_${index}` });
        return (React.createElement("div", { key: `${rowId}_field_${index}`, className: clsx(item.classNames, "isColumn"), style: {
                flex: item.flex || 1,
                marginRight: horizontalSpacing,
                paddingLeft: rowSettings.columnHorizontalPadding,
                paddingRight: rowSettings.columnHorizontalPadding,
                maxWidth: "100%",
                ...item.styles,
            } }, settings.isReadOnly &&
            item.readOnlyProps &&
            isFunction(item.readOnlyProps.renderer)
            ? item.readOnlyProps.renderer({
                formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })
            : React.cloneElement(Component, {
                fieldProps,
                formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })));
    })));
};
const getUpdateSchema = (schema, formId) => {
    return map(schema, (schemaItem) => {
        if (isArray(schemaItem)) {
            return map(schemaItem, (item) => ({
                ...item,
                id: `${formId}_${uniqueId()}`,
            }));
        }
        return { ...schemaItem, id: `${formId}_${uniqueId()}` };
    });
};
export const MLFormContent = (props) => {
    const { schema, formId, formikProps, settings } = props;
    const [formSchema, setFormSchema] = useState(schema);
    useEffect(() => {
        setFormSchema(getUpdateSchema(schema, formId));
    }, [schema]);
    return (React.createElement(React.Fragment, null, map(formSchema, (configRow, index) => {
        const rowId = `${formId}_row_${index}`;
        return (React.createElement(BuildFormRow, { key: rowId, rowId: rowId, schema: configRow, formikProps: formikProps, settings: settings }));
    })));
};
export const MLFormAction = (props) => {
    const { formId, formikProps = {}, containerClassNames, submitButtonLayout = "center", submitButtonText = "Submit", } = props;
    if (props.actionContent)
        return React.cloneElement(props.actionContent || React.createElement("div", null), { formikProps });
    const layoutClassName = `action-${submitButtonLayout}`;
    return (React.createElement("div", { className: clsx("actionContainer", layoutClassName, containerClassNames) }, props.actionContent ? (React.cloneElement(props.actionContent || React.createElement("div", null), {
        formikProps,
        formId,
    })) : (React.createElement("div", null, formikProps.isSubmitting ? (React.createElement("div", { className: "loader" })) : (React.createElement("button", { className: clsx("submit-btn", layoutClassName === "action-fullWidth"
            ? "action-fullWidth"
            : undefined), type: "submit", disabled: formikProps.isSubmitting }, submitButtonText))))));
};
export const MLFormBuilder = (props) => {
    const { formikProps = {}, isInProgress = false, actionConfig = {}, } = props;
    useEffect(() => {
        if (isInProgress === false)
            formikProps.setSubmitting(false);
    }, [isInProgress]);
    return (React.createElement("form", { onSubmit: formikProps.handleSubmit },
        React.createElement(MLFormContent, { ...props }),
        actionConfig.displayActions !== false && (React.createElement(MLFormAction, { formId: props.formId, formikProps: formikProps, ...actionConfig }))));
};
export default MLFormBuilder;
//# sourceMappingURL=index.js.map
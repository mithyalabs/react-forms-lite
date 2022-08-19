'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var lodash = require('lodash');
var formik = require('formik');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Checkbox = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var updatedProps = __assign(__assign({}, fieldProps), { id: fieldProps.id, label: fieldProps.label, name: fieldProps.name, options: fieldProps.options, className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : '') });
    return (React.createElement("div", { style: { display: 'flex' } },
        updatedProps.label && React.createElement("label", { htmlFor: updatedProps.id }, updatedProps.label),
        updatedProps.options && (React.createElement("div", { className: updatedProps.className, id: updatedProps.id },
            updatedProps.options.map(function (option) {
                return typeof option === 'string' ? (React.createElement("div", { key: option, style: { display: 'flex', alignItems: 'center' } },
                    React.createElement("input", { type: "checkbox", name: updatedProps.name, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, id: option, value: option }),
                    React.createElement("label", { htmlFor: option }, option))) : (React.createElement("div", { key: option.name, style: { display: 'flex', alignItems: 'center' } },
                    React.createElement("input", { type: "checkbox", name: updatedProps.name, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, id: option.name, value: option.value }),
                    React.createElement("label", { htmlFor: option.name }, option.value)));
            }),
            updatedProps.helperText && React.createElement("div", { className: "helperText" }, updatedProps.helperText)))));
    // const { fieldConfig = {} as FormConfig, formikProps = {} as FormikValues, fieldProps = {} as IMUICheckboxProps } = props;
    // const { label = '', helperText, options = [], header, headerProps, checkGroupProps, formControlProps, formHelperTextProps, formControlLabelProps, isLabelHtmlString = false, ...checkboxProps } = fieldProps;
    // const fieldError = getFieldError((fieldProps.name || ''), formikProps);
    // const value = get(formikProps, `values.${fieldProps.name}`);
    // const menuOptions = getMenuOptions(options);
    // return (
    //     <FormControl error={!!fieldError} {...formControlProps}>
    //         {
    //             (header) &&
    //             (
    //                 <FormLabel {...headerProps}>{header}</FormLabel>
    //             )
    //         }
    //         <FormGroup {...checkGroupProps}>
    //             {
    //                 (!isEmpty(menuOptions)) ?
    //                     (
    //                         map(menuOptions, (item: MenuOptionObject<FormControlLabelProps>, index) => {
    //                             const { value: option, name, control, ...rest } = item;
    //                             return (
    //                                 <FormControlLabel
    //                                     key={`${fieldConfig.id}_check_${index}`}
    //                                     label={name || ''}
    //                                     {...formControlLabelProps}
    //                                     control={control ?? <Checkbox checked={(indexOf(value, option) > -1)} onBlur={formikProps.handleBlur} onChange={formikProps.handleChange} value={item.value}  {...{ ...checkboxProps, id: `${fieldConfig.id}_check_${index}` }} />}
    //                                     {...rest}
    //                                 />
    //                             )
    //                         })
    //                     ) : (
    //                         <FormControlLabel
    //                             control={<Checkbox checked={(value || false)} onBlur={formikProps.handleBlur} onChange={formikProps.handleChange}  {...checkboxProps} />}
    //                             label={isLabelHtmlString ? <div dangerouslySetInnerHTML={{ __html: label }} /> : label}
    //                             {...formControlLabelProps}
    //                         />
    //                     )
    //             }
    //         </FormGroup>
    //         {
    //             (fieldError || helperText) &&
    //             (<FormHelperText {...formHelperTextProps}>{fieldError || helperText}</FormHelperText>)
    //         }
    //     </FormControl>
    // )
};

var PlainText = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a;
    var _b = fieldProps.text, text = _b === void 0 ? '' : _b;
    return React__default.createElement("div", null, text);
};

var Radio = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var updatedProps = __assign(__assign({}, fieldProps), { id: fieldProps.id, label: fieldProps.label, name: fieldProps.name, options: fieldProps.options, className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : '') });
    // const { fieldProps = {} as IMUIRadioProps, formikProps = {} as FormikValues, isReadOnly = false } = props;
    // const fieldValue = get(formikProps, `values.${fieldProps.name}`) || '';
    return (React.createElement("div", { style: { display: 'flex' } },
        updatedProps.label && React.createElement("label", { htmlFor: updatedProps.id }, updatedProps.label),
        updatedProps.options && (React.createElement("div", { className: updatedProps.className, id: updatedProps.id },
            updatedProps.options.map(function (option) {
                return typeof option === 'string' ? (React.createElement("div", { key: option, style: { display: 'flex', alignItems: 'center' } },
                    React.createElement("input", { type: "radio", name: updatedProps.name, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, id: option, value: option }),
                    React.createElement("label", { htmlFor: option }, option))) : (React.createElement("div", { key: option.name, style: { display: 'flex', alignItems: 'center' } },
                    React.createElement("input", { type: "radio", name: updatedProps.name, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, id: option.name, value: option.value }),
                    React.createElement("label", { htmlFor: option.name }, option.value)));
            }),
            updatedProps.helperText && React.createElement("div", { className: "helperText" }, updatedProps.helperText)))));
};
// typeof (radio) === 'string?
//     < div key = { radio } style = {{ display: "flex", alignItems: 'center' }}>
//                 <input
//                     type="radio"
//                     name={updatedProps.name}
//                     id={radio}
//                     value={radio}
//                     style={radioStyle} />
//                 <label htmlFor={radio}>
//                     {radio}
//                 </label>
//                 <br />:
// <div key={radio.name} style={{ display: "flex", alignItems: 'center' }}>
//     <input
//         type="radio"
//         name={updatedProps.name}
//         id={radio.name}
//         value={radio.value}
//         style={radioStyle} />
//     <label htmlFor={radio.name}>
//         {radio.value}
//     </label>
//     <br />
// </div>

var css = "\n        label{\n             margin-right:10px;\n        }\n        input[type=text],input[type=password]{\n            flex-grow: 1;\n            height: 100%;\n            padding: 2px;\n        }\n        textarea{\n            border:2px solid orange;\n            flex-grow: 1;\n            height: 40px;\n            padding: 2px;\n        }\n        select{\n          flex-grow: 1;\n          height: 100%;\n          cursor: pointer\n        }\n        input[type=radio],input[type=checkbox]{\n          margin-right:10px\n        }\n        .email-input{\n            border-radius:4px\n        }\n        .helperText{\n          color:grey;\n          font-size:12px;\n          margin-top:3px\n        }\n    ";
var valueStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
};

var Select = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var value = lodash.get(formikProps, "values." + fieldProps.name);
    var updatedProps = __assign(__assign({}, fieldProps), { id: fieldProps.id, label: fieldProps.label, name: fieldProps.name, options: fieldProps.options, placeholder: fieldProps.placeholder, className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : '') });
    return (React__default.createElement("div", { style: { display: 'flex' } },
        updatedProps.label && React__default.createElement("label", { htmlFor: updatedProps.id }, updatedProps.label),
        React__default.createElement("div", { style: valueStyle },
            React__default.createElement("select", { className: updatedProps.className, id: updatedProps.id, defaultValue: "", value: value, onChange: formikProps.handleChange, onBlur: formikProps.handleBlur },
                React__default.createElement("option", { disabled: true, value: "" }, updatedProps.placeholder || updatedProps.label || ''),
                updatedProps.options &&
                    updatedProps.options.map(function (option) {
                        return typeof option === 'string' ? (React__default.createElement("option", { value: option, key: option }, option)) : (React__default.createElement("option", { value: option.value, key: option.value }, option.name));
                    })),
            updatedProps.helperText && React__default.createElement("div", { className: "helperText" }, updatedProps.helperText))));
};

var TextField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var updatedProps = __assign(__assign({}, fieldProps), { onChange: formikProps.handleChange, onBlur: formikProps.handleBlur, value: getFieldValue(formikProps, fieldProps.name || ''), className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : '') });
    return (React__default.createElement("div", { style: { display: 'flex' } },
        updatedProps.label && React__default.createElement("label", { htmlFor: updatedProps.id }, updatedProps.label),
        !updatedProps.multiline ? (React__default.createElement("div", { style: valueStyle },
            React__default.createElement("input", { className: updatedProps.className, id: updatedProps.id, type: updatedProps.type, placeholder: updatedProps.placeholder || updatedProps.label || '', value: updatedProps.value, onChange: updatedProps.onChange, onBlur: updatedProps.onBlur }),
            updatedProps.helperText && React__default.createElement("div", { className: "helperText" }, updatedProps.helperText))) : (React__default.createElement("div", { style: valueStyle },
            React__default.createElement("textarea", { className: updatedProps.className, id: updatedProps.id, placeholder: updatedProps.placeholder || updatedProps.label, value: updatedProps.value, onChange: updatedProps.onChange, onBlur: updatedProps.onBlur }),
            updatedProps.helperText && React__default.createElement("div", { className: "helperText" }, updatedProps.helperText)))));
};
var getFieldValue = function (formikProps, name) {
    var value = lodash.get(formikProps, "values." + name);
    if (value === null || value === undefined || value === false)
        return '';
    return value;
};

var compare = function (value1, operator, value2) {
    switch (operator) {
        case '>': return value1 > value2;
        case '<': return value1 < value2;
        case '>=': return value1 >= value2;
        case '<=': return value1 <= value2;
        case '==': return value1 == value2;
        case '!=': return value1 != value2;
        case '===': return value1 === value2;
        case '!==': return value1 !== value2;
        default: return false;
    }
};
var getConditionalOutput = function (itemCondition, formikProps) {
    var itemValue = lodash.get(formikProps, "values." + itemCondition.key);
    return compare(itemValue, itemCondition.operator, itemCondition.compareValue);
};
var hasTruthyValue = function (logicalOperation, values, formikProps) {
    if (logicalOperation === void 0) { logicalOperation = 'AND'; }
    var outputResult = false;
    lodash.forEach(values, function (item, index) {
        var result = getConditionalOutput(item, formikProps);
        if (logicalOperation === 'AND' && !result) {
            outputResult = false;
            return false;
        }
        if (logicalOperation === 'OR' && result) {
            outputResult = true;
            return false;
        }
        if (index === values.length - 1) {
            outputResult = (logicalOperation === 'AND') ? true : false;
        }
        return;
    });
    return outputResult;
};
var getConditionalProps = function (itemConfig, formikProps) {
    var conditionInstructions = itemConfig.condition;
    if (!conditionInstructions || lodash.isEmpty(conditionInstructions.values)) {
        return { finalProps: {} };
    }
    var isValidCondition = hasTruthyValue(conditionInstructions.logicOpn, conditionInstructions.values || [], formikProps);
    //console.log('Conditional props valid condition', isValidCondition);
    if (isValidCondition) {
        /*
        IF CONDITION IS TRUE THEN RETURN THE TRUTHY PROPS ELSE RETURN THE DEFAULT PROPS
        */
        return { finalProps: conditionInstructions.postEffectProps };
    }
    else {
        if (conditionInstructions.hidden === true)
            return { finalProps: conditionInstructions.defaultProps, hidden: true };
        else
            return { finalProps: conditionInstructions.defaultProps, };
    }
};

var useEffect = React.useEffect, useState = React.useState;
var ComponentMapConfig = {};
var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
var attachField = function (type, component, props) {
    if (lodash.isArray(type)) {
        lodash.map(type, function (item) { return (ComponentMapConfig[item] = { component: component, props: props }); });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
var setDefaultProps = function (type, props) {
    var _a;
    if (lodash.isArray(type)) {
        lodash.map(type, function (item) {
            return (ComponentMapConfig[item].props = __assign(__assign({}, ComponentMapConfig[item].props), props));
        });
    }
    else if (ComponentMapConfig[type])
        ComponentMapConfig[type].props = __assign(__assign({}, (_a = ComponentMapConfig[type]) === null || _a === void 0 ? void 0 : _a.props), props);
};
attachField('text', React.createElement(TextField, null), { type: 'text' });
attachField('password', React.createElement(TextField, null), { type: 'password' });
attachField('select', React.createElement(Select, null));
attachField('radio', React.createElement(Radio, null));
attachField('checkbox', React.createElement(Checkbox, null));
attachField('plaintext', React.createElement(PlainText, null));
var BuildFormRow = function (props) {
    var schema = props.schema, rowId = props.rowId, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.settings, settings = _b === void 0 ? {
        horizontalSpacing: 10,
        verticalSpacing: 10,
        columnHorizontalPadding: 0,
        isReadOnly: false,
    } : _b;
    var columnItems = lodash.get(schema, 'columns');
    var rowSettings = __assign(__assign({}, settings), lodash.get(schema, 'settings'));
    var colItems = lodash.isArray(schema) ? schema : lodash.isArray(columnItems) ? columnItems : [schema];
    var rowStyle = { marginBottom: rowSettings.verticalSpacing || 10, display: 'flex' };
    return (React.createElement("div", { style: rowStyle }, lodash.map(colItems, function (item, index) {
        var componentConfig = ComponentMapConfig[item.type];
        var horizontalSpacing = index === colItems.length - 1 ? 0 : rowSettings.horizontalSpacing || 10;
        if (!componentConfig)
            return React.createElement("div", { key: rowId + "_field_" + index });
        var conditionalProps = getConditionalProps(item, formikProps);
        var fieldProps = __assign(__assign(__assign({ id: item.id, name: item.name || item.valueKey }, componentConfig.props), item.fieldProps), conditionalProps.finalProps);
        var Component = componentConfig.component;
        if (conditionalProps.hidden === true)
            return React.createElement("div", { key: rowId + "_field_" + index });
        return (React.createElement("div", { key: rowId + "_field_" + index, className: item.valueKey, style: __assign({ flex: item.flex || 1, marginRight: horizontalSpacing, paddingLeft: rowSettings.columnHorizontalPadding, paddingRight: rowSettings.columnHorizontalPadding, maxWidth: '100%' }, item.styles) }, settings.isReadOnly && item.readOnlyProps && lodash.isFunction(item.readOnlyProps.renderer)
            ? item.readOnlyProps.renderer({
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })
            : React.cloneElement(Component, {
                fieldProps: fieldProps,
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })));
    })));
};
var getUpdateSchema = function (schema, formId) {
    return lodash.map(schema, function (schemaItem) {
        if (lodash.isArray(schemaItem)) {
            return lodash.map(schemaItem, function (item) { return (__assign(__assign({}, item), { id: formId + "_" + lodash.uniqueId() })); });
        }
        return __assign(__assign({}, schemaItem), { id: formId + "_" + lodash.uniqueId() });
    });
};
var MLFormContent = function (props) {
    var schema = props.schema, formId = props.formId, formikProps = props.formikProps, settings = props.settings;
    var _a = useState(schema), formSchema = _a[0], setFormSchema = _a[1];
    useEffect(function () {
        setFormSchema(getUpdateSchema(schema, formId));
    }, [schema]);
    return (React.createElement(React.Fragment, null, lodash.map(formSchema, function (configRow, index) {
        var rowId = formId + "_row_" + index;
        return React.createElement(BuildFormRow, { key: rowId, rowId: rowId, schema: configRow, formikProps: formikProps, settings: settings });
    })));
};
var MLFormBuilder = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a;
    return (React.createElement("form", { onSubmit: formikProps.handleSubmit },
        React.createElement("style", null, css),
        React.createElement(MLFormContent, __assign({}, props))));
};

var getMenuOptions = function (options) {
    return lodash.map(options, function (item) {
        if (lodash.isString(item))
            return { name: item, value: item };
        return item;
    });
};
var getFieldError = function (fieldName, formikProps) {
    var fieldError = lodash.get(formikProps, "errors." + fieldName);
    var isTouched = lodash.get(formikProps, "touched." + fieldName);
    if (!isTouched && formikProps.submitCount < 1)
        return '';
    return fieldError;
};
var processFilesWithCallback = function (files, callback, readAs, encoding) {
    var imgFiles = [];
    var remFiles = [];
    Array.from(files).forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function () {
            var fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1024) + ' kB',
                base64: file.type.includes('image') ? reader.result : null,
                file: file,
            };
            if (file.type.includes('image')) {
                imgFiles.push(fileInfo);
            }
            else {
                remFiles.push(file);
            }
            if (imgFiles.length + remFiles.length === files.length) {
                callback({ imgs: imgFiles, rem: remFiles });
            }
        };
        reader[readAs || 'readAsDataURL'](file, encoding);
        // This works but remember only readAsText can take encoding as a parameter. Might want to mention this in the documentation.
    });
};
var setValue = function (value, formikProps, fieldProps) {
    formikProps.setFieldValue(lodash.get(fieldProps, 'name'), value);
};

var ReactForm = function (props) {
    var config = props.config, formId = props.formId, _a = props.initialValues, initialValues = _a === void 0 ? {} : _a, onSubmit = props.onSubmit, formSettings = props.formSettings, _b = props.isInProgress, isInProgress = _b === void 0 ? false : _b, _c = props.isReadOnly, isReadOnly = _c === void 0 ? false : _c, formikProps = __rest(props, ["config", "formId", "initialValues", "onSubmit", "formSettings", "isInProgress", "isReadOnly"]);
    return (React.createElement(formik.Formik, __assign({ initialValues: initialValues, onSubmit: onSubmit }, formikProps), function (formProps) { return (React.createElement(MLFormBuilder, { schema: config, formId: formId, settings: __assign(__assign({}, formSettings), { isReadOnly: isReadOnly }), formikProps: formProps, isInProgress: isInProgress })); }));
};

var index = './lib/ReactForm';

exports.BuildFormRow = BuildFormRow;
exports.Checkbox = Checkbox;
exports.MLFormBuilder = MLFormBuilder;
exports.MLFormContent = MLFormContent;
exports.PlainText = PlainText;
exports.Radio = Radio;
exports.ReactForm = ReactForm;
exports.Select = Select;
exports.TextField = TextField;
exports.attachField = attachField;
exports.default = index;
exports.getComponentConfig = getComponentConfig;
exports.getFieldError = getFieldError;
exports.getMenuOptions = getMenuOptions;
exports.processFilesWithCallback = processFilesWithCallback;
exports.setDefaultProps = setDefaultProps;
exports.setValue = setValue;
//# sourceMappingURL=index.js.map

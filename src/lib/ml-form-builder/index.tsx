import { FormikProps } from 'formik';
import { get, isArray, isFunction, map, uniqueId } from 'lodash';
import * as React from 'react';
import { Select, TextField, Checkbox, Radio, PlainText } from './lib';
import { getConditionalProps } from './lib/ConditionalOperation';
import { css } from './style';
import { BuilderProps, FormConfig, FormRowProps, RowSchema, RowSettingsProps } from './types';
const { useEffect, useState } = React;

let ComponentMapConfig: {
    [key: string]: { component: JSX.Element; props?: object };
} = {};

export const getComponentConfig = (type: string) => {
    return ComponentMapConfig[type];
};

export const attachField = (type: Array<string> | string, component: JSX.Element, props?: object) => {
    if (isArray(type)) {
        map(type, (item) => (ComponentMapConfig[item] = { component, props }));
    } else ComponentMapConfig[type] = { component, props };
};

export const setDefaultProps = (type: Array<string> | string, props: object) => {
    if (isArray(type)) {
        map(
            type,
            (item) =>
                (ComponentMapConfig[item].props = {
                    ...ComponentMapConfig[item].props,
                    ...props,
                })
        );
    } else if (ComponentMapConfig[type])
        ComponentMapConfig[type].props = {
            ...ComponentMapConfig[type]?.props,
            ...props,
        };
};

attachField('text', <TextField />, { type: 'text' });
attachField('password', <TextField />, { type: 'password' });
attachField('select', <Select />);
attachField('radio', <Radio />);
attachField('checkbox', <Checkbox />);
attachField('plaintext', <PlainText />);

export const BuildFormRow: React.FC<FormRowProps> = (props) => {
    const {
        schema,
        rowId,
        formikProps = {} as FormikProps<any>,
        settings = {
            horizontalSpacing: 10,
            verticalSpacing: 10,
            columnHorizontalPadding: 0,
            isReadOnly: false,
            labelOrientation: 'portrait',
        },
    } = props;

    let columnItems = get(schema, 'columns') as Array<FormConfig>;

    let rowSettings = {
        ...settings,
        ...get(schema, 'settings'),
    } as RowSettingsProps;

    const colItems = isArray(schema) ? schema : isArray(columnItems) ? columnItems : [schema];

    const rowStyle = { marginBottom: rowSettings.verticalSpacing || 10, display: 'flex' };
    return (
        <div style={rowStyle}>
            {map(colItems, (item: FormConfig, index) => {
                const componentConfig = ComponentMapConfig[item.type];

                const horizontalSpacing = index === colItems.length - 1 ? 0 : rowSettings.horizontalSpacing || 10;
                if (!componentConfig) return <div key={`${rowId}_field_${index}`} />;
                const conditionalProps = getConditionalProps(item, formikProps);

                const fieldProps = {
                    id: item.id,
                    name: item.name || item.valueKey,
                    labelOrientation: settings.labelOrientation || 'portrait',
                    ...componentConfig.props,
                    ...item.fieldProps,
                    ...conditionalProps.finalProps,
                };

                const Component = componentConfig.component;

                if (conditionalProps.hidden === true) return <div key={`${rowId}_field_${index}`} />;
                return (
                    <div
                        key={`${rowId}_field_${index}`}
                        className={item.valueKey}
                        style={{
                            flex: item.flex || 1,
                            marginRight: horizontalSpacing,
                            paddingLeft: rowSettings.columnHorizontalPadding,
                            paddingRight: rowSettings.columnHorizontalPadding,
                            maxWidth: '100%',
                            ...item.styles,
                        }}
                    >
                        {settings.isReadOnly && item.readOnlyProps && isFunction(item.readOnlyProps.renderer)
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
                              })}
                    </div>
                );
            })}
        </div>
    );
};

const getUpdateSchema = (schema: Array<RowSchema>, formId: string) => {
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

export const MLFormContent: React.FC<BuilderProps> = (props) => {
    const { schema, formId, formikProps, settings } = props;
    const [formSchema, setFormSchema] = useState<Array<RowSchema>>(schema);

    useEffect(() => {
        setFormSchema(getUpdateSchema(schema, formId));
    }, [schema]);
    return (
        <>
            {map(formSchema, (configRow, index) => {
                const rowId = `${formId}_row_${index}`;

                return <BuildFormRow key={rowId} rowId={rowId} schema={configRow} formikProps={formikProps} settings={settings} />;
            })}
        </>
    );
};

export const MLFormBuilder: React.FC<BuilderProps> = (props) => {
    const { formikProps = {} as FormikProps<any> } = props;
    return (
        <form onSubmit={formikProps.handleSubmit}>
            <style>{css}</style>
            <MLFormContent {...props} />
        </form>
    );
};

export default MLFormBuilder;

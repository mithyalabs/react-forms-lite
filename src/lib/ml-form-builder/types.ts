import { TFieldConditions } from './lib/ConditionalOperation';
import { FormikProps } from 'formik';

export interface ReadOnlyProps {
    renderer: (props: IFieldProps) => React.ReactNode;
}

export interface FormConfig {
    type: string;
    name?: string;
    id?: string;
    valueKey: string;
    flex?: number | string;
    fieldProps?: object;
    styles?: object;
    class?: Array<string>;
    helperText?: string;
    condition?: TFieldConditions;
    readOnlyProps?: ReadOnlyProps;
}

export interface RowSettingsProps {
    horizontalSpacing?: number;
    verticalSpacing?: number;
    columnHorizontalPadding?: number;
}

export interface BuilderSettingsProps extends RowSettingsProps {
    isReadOnly?: boolean;
    labelOrientation?: string;
}

export type RowSchema = Array<FormConfig> | FormConfig | { columns: Array<FormConfig>; settings?: RowSettingsProps };

export interface FormRowProps<T = any> {
    schema: RowSchema;
    rowId: string;
    formikProps?: FormikProps<T>;
    settings?: BuilderSettingsProps;
}

export interface BuilderProps<T = any> {
    schema: Array<RowSchema>;
    formId: string;
    formikProps?: FormikProps<T>;
    settings?: BuilderSettingsProps;
    isInProgress?: boolean;
}

export interface IFieldProps<T = any> {
    formikProps?: FormikProps<T>;
    fieldConfig?: FormConfig;
    isReadOnly?: boolean;
}

export interface IOptionProps {
    name?: string;
    value?: string;
}
export interface IRadioCheckboxProps {
    id: string;
    name: string;
    label?: string;
    options?: IOptionProps[];
    class?: string;
    helperText?: string;
    labelOrientation?: string;
}

export interface PlainTextFieldProps {
    text?: string | JSX.Element;
    class?: string;
}
export interface ISelectProps {
    id: string;
    name: string;
    label?: string;
    options?: IOptionProps[];
    placeholder?: string;
    class?: string;
    helperText?: string;
    labelOrientation?: string;
}

export interface ITextfieldProps {
    id: string;
    name: string;
    type: string;
    label?: string;
    multiline?: boolean;
    placeholder?: string;
    class?: string;
    helperText?: string;
    labelOrientation?: string;
}

export interface ILabelProps {
    id: string;
    label: string;
}

export interface IHelperTextProps {
    text: string;
}

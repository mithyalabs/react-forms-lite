import { FormikConfig } from "formik";
import React from "react";
import { BuilderSettingsProps, FormActionProps, RowSchema } from "../lib/ml-form-builder";
export * from "./ml-form-builder";
export * from "./ml-form-builder/lib";
export * from './ml-form-builder/Utils';
export interface ReactFormProps extends FormikConfig<any> {
    config: Array<RowSchema>;
    formId: string;
    actionConfig?: FormActionProps;
    formSettings?: BuilderSettingsProps;
    isInProgress?: boolean;
    isReadOnly?: boolean;
}
export declare const ReactForm: React.FC<ReactFormProps>;

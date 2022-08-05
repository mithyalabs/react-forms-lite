import * as React from 'react';
import { RowSchema, BuilderSettingsProps } from './ml-form-builder';
import { FormikValues } from 'formik';
export * from './ml-form-builder';
export * from './ml-form-builder/lib';
export * from './ml-form-builder/Utils';
export interface IReactFormProps extends FormikValues {
    config: Array<RowSchema>;
    formId: string;
    formSettings?: BuilderSettingsProps;
    isInProgress?: boolean;
    isReadOnly?: boolean;
}
export declare const ReactForm: React.FC<IReactFormProps>;
export default ReactForm;

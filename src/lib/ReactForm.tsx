import * as React from 'react';
import { MLFormBuilder, RowSchema, BuilderSettingsProps } from './ml-form-builder';
import { Formik, FormikValues } from 'formik';
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
export const ReactForm: React.FC<IReactFormProps> = (props) => {
    const { config, formId, initialValues = {}, onSubmit, formSettings, isInProgress = false, isReadOnly = false, ...formikProps } = props;
    console.log(formSettings);

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} {...formikProps}>
            {(formProps) => (
                <MLFormBuilder
                    schema={config}
                    formId={formId}
                    settings={{ ...formSettings, isReadOnly }}
                    formikProps={formProps}
                    isInProgress={isInProgress}
                />
            )}
        </Formik>
    );
};

export default ReactForm;

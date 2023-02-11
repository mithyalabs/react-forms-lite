import { Formik, FormikConfig } from "formik";
import React from "react";
import MLFormBuilder, {BuilderSettingsProps, FormActionProps, RowSchema} from "../lib/ml-form-builder";
export * from "../lib/ml-form-builder/index";
export interface ReactFormProps extends FormikConfig<any> {
    config: Array<RowSchema>,
    formId: string,
    actionConfig?: FormActionProps
    formSettings?: BuilderSettingsProps
    isInProgress?: boolean
    isReadOnly?: boolean
}
const ReactForm: React.FC<ReactFormProps> = (props) => {
  const {
    config,
    formId = "1",
    initialValues = {},
    onSubmit,
    actionConfig,
    formSettings,
    isInProgress = true,
    isReadOnly = false,
    ...formikProps
  } = props;
 
  return (
    
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          {...formikProps}
        >
          {(formikProp) => {
            return (
              <MLFormBuilder
                schema={config}
                formId={formId}
                actionConfig={actionConfig}
                settings={{ ...formSettings, isReadOnly }}
                formikProps={formikProp}
                isInProgress={isInProgress}
              />
            );
          }}
        </Formik>
     
  );
};
export default ReactForm;

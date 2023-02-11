import { Formik, FormikValues } from "formik";
import React from "react";
import MLFormBuilder, {FormActionProps} from "../lib/ml-form-builder";
export * from "../lib/ml-form-builder/index";

export interface ReactFormProps extends FormikValues {
  formId?: string;
  isInProgress?: boolean;
  isReadOnly?: boolean;
  actionCongig?:FormActionProps;
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

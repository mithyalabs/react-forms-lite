// import * as React from 'react';
// import { MLFormBuilder, RowSchema, FormActionProps, BuilderSettingsProps } from './ml-form-builder';
// import { Formik, FormikValues } from 'formik';
// export * from './ml-form-builder';
// // export * from './ml-form-builder/lib/';
// // export * from './ml-form-builder/Utils'


// export interface ReactFormProps extends FormikValues {
//     config: Array<RowSchema>,
//     formId: string,
//     actionConfig: FormActionProps
//     formSettings?: BuilderSettingsProps
//     isInProgress?: boolean
//     isReadOnly?: boolean
// }
// export const ReactForm: React.FC<ReactFormProps> = (props) => {
//     const { config, formId, initialValues = {}, onSubmit, actionConfig, formSettings, isInProgress = false, isReadOnly = false, ...formikProps } = props;

//     return (
//         <Formik
//             initialValues={initialValues}
//             onSubmit={onSubmit}
//             {...formikProps}
//         >
//             {
//                 formProps => (<MLFormBuilder
//                     schema={config}
//                     formId={formId}
//                     actionConfig={actionConfig}
//                     settings={{ ...formSettings, isReadOnly }}
//                     formikProps={formProps}
//                     isInProgress={isInProgress}
//                 />)
//             }
//         </Formik>

//     )
// }


// export default ReactForm;


import { Formik, FormikValues } from "formik";
import React from "react";
// import "./index.scss";
import MLFormBuilder, {FormActionProps} from "../lib/ml-form-builder";
export * from "../lib/ml-form-builder/index";
export interface ReactFormProps extends FormikValues {
  formId?: string;
  isInProgress?: boolean;
  isReadOnly?: boolean;
  actionCongig?:FormActionProps;
}
const RegistrationForm: React.FC<ReactFormProps> = (props) => {
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
    <div className="registration-field">
      <div className="registration-container">
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
      </div>
    </div>
  );
};
export default RegistrationForm;

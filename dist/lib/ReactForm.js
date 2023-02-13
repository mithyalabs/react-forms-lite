import { Formik } from "formik";
import React from "react";
import MLFormBuilder from "../lib/ml-form-builder";
export * from "../lib/ml-form-builder/index";
export const ReactForm = (props) => {
    const { config, formId = "1", initialValues = {}, onSubmit, actionConfig, formSettings, isInProgress = true, isReadOnly = false, ...formikProps } = props;
    return (React.createElement(Formik, { initialValues: initialValues, onSubmit: onSubmit, ...formikProps }, (formikProp) => {
        return (React.createElement(MLFormBuilder, { schema: config, formId: formId, actionConfig: actionConfig, settings: { ...formSettings, isReadOnly }, formikProps: formikProp, isInProgress: isInProgress }));
    }));
};
export default ReactForm;
//# sourceMappingURL=ReactForm.js.map
import clsx from "clsx";
import { FormikProps } from "formik";
import React from "react";
import { FieldItemProps, FieldProps } from "../../Types";
import { getFieldError } from "../../Utils";
import "./index.scss";

interface TextHelperErrorProps extends FieldProps {
  fieldProps?: FieldItemProps;
}
const TextHelperError: React.FC<TextHelperErrorProps> = (props) => {
  const {
    fieldProps = {} as FieldItemProps,
    formikProps = {} as FormikProps<unknown>,
  } = props;

  const { name, helperText, classNames } = fieldProps;
  const fieldError = getFieldError(name || "", formikProps);

  return (
    <div className={clsx("text-error-helper-field", classNames)}>
      {(fieldError || helperText) && (
        <div className="label-error">
          {fieldError ? (
            <span className="error-text error">{fieldError}</span>
          ) : (
            <span className="helper-text helpertext">{helperText} </span>
          )}
        </div>
      )}
    </div>
  );
};
export default TextHelperError;

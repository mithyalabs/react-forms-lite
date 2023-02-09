import React from "react";
import { FieldItemProps, FieldProps } from "../../Types";
import "./index.scss";
import { get } from "lodash";
import { FormikValues } from "formik";
import clsx from "clsx";

export interface SwitchFieldProps extends FieldItemProps {
  label?: string;
}

interface SwitchProps extends FieldProps {
  fieldProps?: SwitchFieldProps & FieldItemProps;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    formikProps = {} as FormikValues,
    fieldProps = {} as SwitchFieldProps,
  } = props;
  const { label, name = "", helperText, classNames, nativeProps} = fieldProps;

  const fieldValue = get(formikProps, `values.${name}`);
  const handleOnChange = () => {
    formikProps.setFieldValue(`${name}`, !fieldValue);
  };
  return (
    <div className={clsx("switch-field", classNames)}>
      {label && <span className="switch-label switchlabel">{label}</span>}
      <label className="switch-container">
        <input
          className="slider"
          type="checkbox"
          checked={!!fieldValue}
          value={fieldValue}
          onChange={handleOnChange}
          {...nativeProps}
        />
        <span className="slider round"></span>
      </label>

    {
      // TODO Can use same FieldHelperText component
    }
      <span className="helper-text helpertext">{helperText}</span> 
    </div>
  );
};

export default Switch;

import React from "react";
import "./index.scss";
import { get } from "lodash";
import clsx from "clsx";
import { FieldItemProps, FieldProps } from "../../Types";
import { FormikProps } from "formik";
import HelperText from "../HelperText";
import { Option } from "../../Types";

export interface CheckboxFieldProps extends FieldItemProps {
  options?: Option[];
  isColumner?: boolean; 
}
interface CheckBoxProps extends FieldProps {
  fieldProps?: CheckboxFieldProps;
}

// TODO handle boolean checkbox values
const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {
    formikProps = {} as FormikProps<unknown>,
    fieldProps = {} as CheckboxFieldProps,
  } = props;
  const {
    options = [],
    name = "",
    label,
    isColumner = false,
    classNames,
    nativeProps,
    disabled,
  } = fieldProps;

  const fieldValue: string[] = get(formikProps, `values.${name}`) || [] || "";


  return (
    <div className={clsx("checkbox-field ", classNames)}>
      {label && <span className="checkbox-label checkboxlabel">{label}</span>}
      <div
        className={clsx("checkbox-container", isColumner ? "isColumner" : undefined)}
      >
        {options.map((it) => (
          <span key={it.value} className="checkbox-name checkboxname">
            <input
              className="checkbox-input"
              type="checkbox"
              name={name}
              value={it.value}
              checked={fieldValue?.includes(it.value)}
              onChange={formikProps.handleChange}
              disabled={disabled}
            {...nativeProps}
            />
            {it.name}
          </span>
        ))}
      </div>
      <HelperText fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};

export default CheckBox;

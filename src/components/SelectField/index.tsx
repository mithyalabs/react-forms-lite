import React from "react";
import { FieldItemProps, FieldProps } from "../../Types";
import { isString } from "lodash";
import "./index.scss";
import { FormikProps } from "formik";
import clsx from "clsx";
import TextHelperError from "../TextHelperError";
import { Option } from "../../Types";
export interface SelectFProps extends FieldItemProps {
  options?: Option[];
  emptyItem?: string | boolean;
}
interface SelectFieldProps extends FieldProps {
  fieldProps?: SelectFProps;
}

// TODO handle disabled props
// 
const SelectField: React.FC<SelectFieldProps> = (props) => {
  // TODO change FormikValues type to FormikProps<unknown>
  const { formikProps = {} as FormikProps<unknown>, fieldProps = {} as SelectFProps } =
    props;
  const {
    name = "",
    label,
    options = [],
    emptyItem,
    helperText,
    nativeProps,
    classNames,
  } = fieldProps;
 
  const emptyItemText = isString(emptyItem) ? emptyItem : "No option selected";

  const optionList = emptyItem
    ? [{ value: "", name: emptyItemText }, ...options]
    : options;

  return (
    <div className={clsx("select-field", classNames)}>
      {label && (
        <label htmlFor={name} className="select-field-label selectfieldlabel">
          {label}
        </label>
      )}
      <div className={clsx("select-container selectcontainer")}>
        <select
          id={name}
          onChange={formikProps.handleChange}
          className={clsx("select-option selectoption")}
          {...nativeProps}
        >
          {optionList.map((it) => {
            return (
              <option key={it.value} value={it.value} {...nativeProps}>
                {it.name}
              </option>
            );
          })}
        </select>
      </div>
      <TextHelperError fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};
export default SelectField;

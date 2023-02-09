import { get } from "lodash";
import React from "react";
import "./index.scss";
import clsx from "clsx";
import { FieldItemProps, FieldProps } from "../../Types";
import { getFieldError } from "../../Utils";
import { FormikProps } from "formik";
import TextHelperError from "../TextHelperError";
import { Option } from "../../Types";
export interface RadioFieldProps extends FieldItemProps {
  options?: Option[];
  isColumner?: boolean;
}
interface RadioProps extends FieldProps {
  fieldProps?: RadioFieldProps;
}

const Radio: React.FC<RadioProps> = (props) => {
  const {
    formikProps = {} as FormikProps<unknown>,
    fieldProps = {} as RadioFieldProps,
  } = props;
  const {
    options = [],
    name = "",
    label,
    isColumner,
    classNames,
    nativeProps,
  } = fieldProps;
  
  const fieldValue: string = get(formikProps, `values.${name}`) || "";

  return (
    <div className={clsx("radio-field", classNames)}>
      {label && <span className="radio-label radiolabel">{label}</span>}
      <div className={clsx("radio-container", isColumner ? "isColumner" : undefined)}>
        {options.map((it) => (
          <span key={it.value} className="radio-name radioname">
            <input
              className="radio-input"
              type="radio"
              name={name}
              value={it.value}
              checked={fieldValue === it.value}
              onChange={formikProps.handleChange}
              {...nativeProps}
            />
            {it.name}
          </span>
        ))}
      </div>
      <TextHelperError fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};
export default Radio;

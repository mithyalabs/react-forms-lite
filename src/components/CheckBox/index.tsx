import React from "react";
import "./index.scss";
import { get, isEmpty, map, values } from "lodash";
import clsx from "clsx";
import { FieldItemProps, FieldProps } from "../../Types";
import { FormikProps } from "formik";
import HelperText from "../HelperText";
import { Option } from "../../Types";

export interface CheckboxFieldProps extends FieldItemProps {
  options?: Option[];
  isColumner?: boolean;
  booleanLabel?: string
}
interface CheckBoxProps extends FieldProps {
  fieldProps?: CheckboxFieldProps;
}

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
    booleanLabel
  } = fieldProps;

  const fieldValue:string[] = get(formikProps, `values.${name} ||  []`);
  const booleanValue = get(formikProps, `values.${name} `);

  return (
    <div className={clsx("checkbox-field ", classNames)}>
      {label && <span className="checkbox-label checkboxlabel">{label}</span>}
      <div
        className={clsx("checkbox-container", isColumner ? "isColumner" : undefined)}
      >

        {
          (!isEmpty(options)) ?
            (
              map(options, (item: any, index) => {
                return (
                  <div key={`${item.value}_${index}`} className="checkbox-name checkboxname">
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      name={name}
                      value={item.value}
                      checked={fieldValue?.includes(item.value)}
                      onChange={formikProps.handleChange}
                      disabled={disabled}
                      {...nativeProps}
                    />
                    {item.name}
                  </div>
                )
              })
            ) : (
              <div className="checkbox-name checkboxname">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name={name}
                  value="false"
                  checked={booleanValue }
                  onBlur={formikProps.handleBlur}
                  onChange={formikProps.handleChange}
                  disabled={disabled}
                  {...nativeProps}
                />
                {booleanLabel}
              </div>
            )
        }
      </div>
      
      <HelperText fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};

export default CheckBox;

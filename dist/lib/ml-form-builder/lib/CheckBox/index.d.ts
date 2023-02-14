import React from "react";
import "./index.module.scss";
import { FieldItemProps, FieldProps, Option } from "../Types";
export interface CheckboxFieldProps extends FieldItemProps {
    options?: Option[];
    isColumn?: boolean;
    booleanLabel?: string;
}
interface CheckBoxProps extends FieldProps {
    fieldProps?: CheckboxFieldProps;
}
export declare const CheckBox: React.FC<CheckBoxProps>;
export {};

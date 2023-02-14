import React from "react";
import { FieldItemProps, FieldProps, Option } from "../Types";
import "./index.module.scss";
export interface SelectFProps extends FieldItemProps {
    options?: Option[];
    emptyItem?: string | boolean;
}
interface SelectFieldProps extends FieldProps {
    fieldProps?: SelectFProps;
}
export declare const SelectField: React.FC<SelectFieldProps>;
export {};

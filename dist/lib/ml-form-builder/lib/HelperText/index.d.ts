import React from "react";
import { FieldItemProps, FieldProps } from "../Types";
import "./index.module.scss";
interface HelperText extends FieldProps {
    fieldProps?: FieldItemProps;
}
export declare const HelperText: React.FC<HelperText>;
export {};

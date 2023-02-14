import React from "react";
import { FieldItemProps, FieldProps } from "../Types";
import "./index.module.scss";
export interface SwitchFieldProps extends FieldItemProps {
    label?: string;
}
interface SwitchProps extends FieldProps {
    fieldProps?: SwitchFieldProps & FieldItemProps;
}
export declare const Switch: React.FC<SwitchProps>;
export {};

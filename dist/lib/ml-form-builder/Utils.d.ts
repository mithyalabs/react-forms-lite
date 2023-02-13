import * as React from "react";
import { FormikValues } from "formik";
export type MenuOptionObject<T = unknown> = {
    name: string | React.ReactNode;
    value: string;
} & T;
export type MenuOptions<T> = Array<string> | Array<MenuOptionObject<T>>;
export type ReadAsType = keyof Pick<FileReader, "readAsBinaryString" | "readAsDataURL" | "readAsArrayBuffer" | "readAsText">;
export declare const getMenuOptions: <T extends unknown>(options: MenuOptions<T>) => (number | MenuOptionObject<T> | {
    (...items: ConcatArray<string>[]): string[];
    (...items: (string | ConcatArray<string>)[]): string[];
} | {
    (...items: ConcatArray<MenuOptionObject<T>>[]): MenuOptionObject<T>[];
    (...items: (MenuOptionObject<T> | ConcatArray<MenuOptionObject<T>>)[]): MenuOptionObject<T>[];
} | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: MenuOptionObject<T>, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: MenuOptionObject<T>, fromIndex?: number | undefined) => boolean) | ((index: number) => string | undefined) | ((index: number) => MenuOptionObject<T> | undefined) | ((separator?: string | undefined) => string) | ((callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: MenuOptionObject<T>, index: number, array: MenuOptionObject<T>[]) => void, thisArg?: any) => void) | {
    (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
    (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
    <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[]) => U, initialValue: U): U;
} | {
    (callbackfn: (previousValue: MenuOptionObject<T>, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => MenuOptionObject<T>): MenuOptionObject<T>;
    (callbackfn: (previousValue: MenuOptionObject<T>, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => MenuOptionObject<T>, initialValue: MenuOptionObject<T>): MenuOptionObject<T>;
    <U_1>(callbackfn: (previousValue: U_1, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => U_1, initialValue: U_1): U_1;
} | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((...items: string[]) => number) | ((...items: MenuOptionObject<T>[]) => number) | ((compareFn?: ((a: string, b: string) => number) | undefined) => string[]) | ((compareFn?: ((a: MenuOptionObject<T>, b: MenuOptionObject<T>) => number) | undefined) => MenuOptionObject<T>[]) | ((value: string, start?: number | undefined, end?: number | undefined) => string[]) | ((value: MenuOptionObject<T>, start?: number | undefined, end?: number | undefined) => MenuOptionObject<T>[]) | ((target: number, start: number, end?: number | undefined) => string[]) | ((target: number, start: number, end?: number | undefined) => MenuOptionObject<T>[]) | {
    name: string;
    value: string;
})[];
export declare const getFieldError: (fieldName: string, formikProps: FormikValues) => any;
export declare const processFilesWithCallback: (files: FileList | File[], callback: Function, readAs?: ReadAsType, encoding?: string) => void;
export declare const setValue: (value: any, formikProps: FormikValues, fieldProps: any) => void;
export declare const getComponentConfig: (type: string) => {
    component: JSX.Element;
    props?: object | undefined;
};

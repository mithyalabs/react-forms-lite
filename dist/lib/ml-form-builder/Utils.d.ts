import * as React from 'react';
import { FormikValues } from 'formik';
import { IHelperTextProps, ILabelProps } from './types';
export declare type MenuOptionObject<T = unknown> = {
    name: string | React.ReactNode;
    value: string;
} & T;
export declare type MenuOptions<T> = Array<string> | Array<MenuOptionObject<T>>;
export declare type ReadAsType = keyof Pick<FileReader, 'readAsBinaryString' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsText'>;
export declare const getMenuOptions: <T extends any>(options: MenuOptions<T>) => (number | MenuOptionObject<T> | ((...items: string[]) => number) | ((...items: MenuOptionObject<T>[]) => number) | {
    (...items: ConcatArray<string>[]): string[];
    (...items: (string | ConcatArray<string>)[]): string[];
} | {
    (...items: ConcatArray<MenuOptionObject<T>>[]): MenuOptionObject<T>[];
    (...items: (MenuOptionObject<T> | ConcatArray<MenuOptionObject<T>>)[]): MenuOptionObject<T>[];
} | ((separator?: string | undefined) => string) | ((compareFn?: ((a: string, b: string) => number) | undefined) => string[]) | ((compareFn?: ((a: MenuOptionObject<T>, b: MenuOptionObject<T>) => number) | undefined) => MenuOptionObject<T>[]) | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: MenuOptionObject<T>, fromIndex?: number | undefined) => number) | ((callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: MenuOptionObject<T>, index: number, array: MenuOptionObject<T>[]) => void, thisArg?: any) => void) | {
    (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
    (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
    <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[]) => U, initialValue: U): U;
} | {
    (callbackfn: (previousValue: MenuOptionObject<T>, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => MenuOptionObject<T>): MenuOptionObject<T>;
    (callbackfn: (previousValue: MenuOptionObject<T>, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => MenuOptionObject<T>, initialValue: MenuOptionObject<T>): MenuOptionObject<T>;
    <U_1>(callbackfn: (previousValue: U_1, currentValue: MenuOptionObject<T>, currentIndex: number, array: MenuOptionObject<T>[]) => U_1, initialValue: U_1): U_1;
} | ((value: string, start?: number | undefined, end?: number | undefined) => string[]) | ((value: MenuOptionObject<T>, start?: number | undefined, end?: number | undefined) => MenuOptionObject<T>[]) | ((target: number, start: number, end?: number | undefined) => string[]) | ((target: number, start: number, end?: number | undefined) => MenuOptionObject<T>[]) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: MenuOptionObject<T>, fromIndex?: number | undefined) => boolean) | {
    <U_2>(this: U_2[][][][][][][][], depth: 7): U_2[];
    <U_3>(this: U_3[][][][][][][], depth: 6): U_3[];
    <U_4>(this: U_4[][][][][][], depth: 5): U_4[];
    <U_5>(this: U_5[][][][][], depth: 4): U_5[];
    <U_6>(this: U_6[][][][], depth: 3): U_6[];
    <U_7>(this: U_7[][][], depth: 2): U_7[];
    <U_8>(this: U_8[][], depth?: 1 | undefined): U_8[];
    <U_9>(this: U_9[], depth: 0): U_9[];
    <U_10>(depth?: number | undefined): any[];
} | ((index: number) => string | undefined) | ((index: number) => MenuOptionObject<T> | undefined) | {
    name: string;
    value: string;
})[];
export declare const getFieldError: (fieldName: string, formikProps: FormikValues) => any;
export declare const processFilesWithCallback: (files: FileList | File[], callback: Function, readAs?: "readAsBinaryString" | "readAsDataURL" | "readAsArrayBuffer" | "readAsText" | undefined, encoding?: string | undefined) => void;
export declare const setValue: (value: any, formikProps: FormikValues, fieldProps: any) => void;
export declare const Label: ({ id, label }: ILabelProps) => JSX.Element;
export declare const HelperText: React.FC<IHelperTextProps>;
export default Label;

import { FormikProps } from 'formik';
import * as React from 'react';
import { IFieldProps, IRadioCheckboxProps } from '../types';
import Label, { HelperText } from '../Utils';

interface IProps extends IFieldProps {
    fieldProps?: IRadioCheckboxProps;
}

export const Checkbox: React.FC<IProps> = (props) => {
    const { formikProps = {} as FormikProps<unknown>, fieldProps = {} as IRadioCheckboxProps } = props;

    const updatedProps = {
        ...fieldProps,
        id: fieldProps.id,
        label: fieldProps.label,
        name: fieldProps.name,
        options: fieldProps.options,
        className: fieldProps.name + ' ' + (fieldProps.class ? fieldProps.class : ''),
    };

    return (
        <div style={{ display: 'flex', flexDirection: fieldProps.labelOrientation == 'landscape' ? 'row' : 'column' }}>
            {updatedProps.label && <Label id={updatedProps.id} label={updatedProps.label} />}

            {updatedProps.options && (
                <div className={updatedProps.className} id={updatedProps.id}>
                    {updatedProps.options.map((option) => {
                        return typeof option === 'string' ? (
                            <div key={option} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option}
                                    value={option} //
                                />

                                <label htmlFor={option}>{option}</label>
                            </div>
                        ) : (
                            <div key={option.name} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    name={updatedProps.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    id={option.name}
                                    value={option.value} //
                                />

                                <label htmlFor={option.name}>{option.value}</label>
                            </div>
                        );
                    })}
                    {updatedProps.helperText && <HelperText text={updatedProps.helperText} />}
                </div>
            )}
        </div>
    );

    // const { fieldConfig = {} as FormConfig, formikProps = {} as FormikValues, fieldProps = {} as IMUICheckboxProps } = props;
    // const { label = '', helperText, options = [], header, headerProps, checkGroupProps, formControlProps, formHelperTextProps, formControlLabelProps, isLabelHtmlString = false, ...checkboxProps } = fieldProps;
    // const fieldError = getFieldError((fieldProps.name || ''), formikProps);
    // const value = get(formikProps, `values.${fieldProps.name}`);
    // const menuOptions = getMenuOptions(options);
    // return (
    //     <FormControl error={!!fieldError} {...formControlProps}>
    //         {
    //             (header) &&
    //             (
    //                 <FormLabel {...headerProps}>{header}</FormLabel>
    //             )
    //         }
    //         <FormGroup {...checkGroupProps}>
    //             {
    //                 (!isEmpty(menuOptions)) ?
    //                     (
    //                         map(menuOptions, (item: MenuOptionObject<FormControlLabelProps>, index) => {
    //                             const { value: option, name, control, ...rest } = item;
    //                             return (
    //                                 <FormControlLabel
    //                                     key={`${fieldConfig.id}_check_${index}`}
    //                                     label={name || ''}
    //                                     {...formControlLabelProps}
    //                                     control={control ?? <Checkbox checked={(indexOf(value, option) > -1)} onBlur={formikProps.handleBlur} onChange={formikProps.handleChange} value={item.value}  {...{ ...checkboxProps, id: `${fieldConfig.id}_check_${index}` }} />}
    //                                     {...rest}
    //                                 />
    //                             )
    //                         })
    //                     ) : (
    //                         <FormControlLabel
    //                             control={<Checkbox checked={(value || false)} onBlur={formikProps.handleBlur} onChange={formikProps.handleChange}  {...checkboxProps} />}
    //                             label={isLabelHtmlString ? <div dangerouslySetInnerHTML={{ __html: label }} /> : label}
    //                             {...formControlLabelProps}
    //                         />
    //                     )
    //             }
    //         </FormGroup>

    //         {
    //             (fieldError || helperText) &&
    //             (<FormHelperText {...formHelperTextProps}>{fieldError || helperText}</FormHelperText>)
    //         }
    //     </FormControl>
    // )
};

export default Checkbox;

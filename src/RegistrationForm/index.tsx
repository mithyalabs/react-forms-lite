import {useState} from "react";
import "./index.scss";
import * as Yup from "yup";
import ReactForm from "../lib/ReactForm"

const registrationConfig = [
    [
      {
        type: "select",
        valueKey: "title",
        fieldProps: {
          options:[
            { value: "Mr", name: "Mr" },
            { value: "Mrs", name: "Mrs" },
            { value: "Miss", name: "Miss" },
          ],
          label: "Title"
        },
        
      },
      {
        type: "text",
        valueKey: "fName",
        fieldProps: {
          label: "First Name",
          placeholder: "Enter First Name",
          helperText: "Please fill your first name",
        },
      },
      
  
      {
        type: "text",
        valueKey: "lName",
        fieldProps: {
          label: "Last Name",
          placeholder: "Enter last Name",
          helperText: "Please fill  your last name",
        },
      },
    ],
    {
      type: "file",
      valueKey: "file",
      fieldProps: {
        label: "Upload a file",
        helperText: "Please Upload a file",
      },
    },
    [
      {
        type: "text",
        valueKey: "jobTitle",
        fieldProps: {
          label: "Job Title",
          placeholder: "Enter job title",
          helperText: "Enter job title",
        },
      },
  
      {
        type: "text",
        valueKey: "street",
        fieldProps: {
          label: "Street",
          placeholder: "Enter street",
          helperText: "Enter street details",
        },
      },
    ],
    {
      type: "text",
      valueKey: "postalCode",
      fieldProps: {
        label: "Postal Code",
        placeholder: "Enter postal code",
        helperText: "Enter postal code",
      },
    },
  
    [
      {
        type: "radio",
        valueKey: "gender",
        fieldProps:{    
          options :[
            { value: "male", name: "Male" },
            { value: "female", name: "Female" },
            { value: "other", name: "Other" },
          ],
          label: "Select gender",
          helperText: "Select any one option",
          isColumn: true,
        },   
      },
      {
        type: "switch",
        valueKey: "toggle",
        fieldProps: {
          label: "Toggle",
          helperText: "Click for toggle",
        },
        
      },
    ],
  
    [
      {
        type: "checkbox",
        valueKey: "language",
        fieldProps: {
          options:[
            { value: "english", name: "English" },
            { value: "hindi", name: "Hindi" },
            { value: "french", name: "French" },
          ],
          label: "Language",
          emptyItem: "Select something",
          helperText: "Select your language",
        }, 
      },
  
      {
        type: "phone",
        valueKey: "phoneNo",
        fieldProps: {
          helperText: "Enter your phone no.",
          placeholder: "Enter your phone no.",
        },
      },
    ],
    {
      type: "text",
      valueKey: "allergies",
      fieldProps: {
        label: "Do you have any allergies and/or food intolerance ?",
        fullWidth: true,
        helperText:
          "I hereby consent to the following information regarding allergies and intolerances being shared and processed as part of the event.",
      },
    },
    {
      type: "text",
      valueKey: "submitQuestions",
      fieldProps: {
        label: "Pre-submit your question/s here",
      },
    },
    {
      type: "checkbox",
      valueKey: "agreement",
      fieldProps: {
        // options:[
        //   { value: "Mr", name: "Mr" },
        //   { value: "Mrs", name: "Mrs" },
        //   { value: "Miss", name: "Miss" },
        // ],
        booleanLabel:"I agree to the Terms & Conditions and Privacy Policy Terms & Conditions and Privacy Policy",
      },
      
    },
  ];

import React from 'react';
const RegistrationForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNo: Yup.string().required("Phone No. Required"),
    language: Yup.array().min(1, "Required").required("Required"),
    allergies: Yup.string().required("Required"),
    submitQuestions: Yup.string().required("Required"),
    agreement: Yup.array().min(1, "Required").required("Required"),
    file: Yup.mixed().required("Required")
    .test('fileSize', 'File size must be less than 5 MB', (value) => {
      return value && value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'File must be of type jpg or png', (value) => {
      return value && (value.type === 'image/jpeg' || value.type === 'image/png');
    }),})
return (
    <div>
        <ReactForm
        config={registrationConfig}
        formId="1"
        initialValues={{}}
        isInProgress={loading}
        validationSchema={validationSchema}
        // actionConfig={myActionConfig}
        onSubmit={(values: object) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => setLoading(false), 200);
        } }       />
      
    </div>
    );
};
export default RegistrationForm;
import React, { useState } from "react";
import "./App.scss";
import * as Yup from "yup";
import {FormActionProps} from "./lib/ml-form-builder"
import ReactForm from "./lib/ReactForm"


const myActionConfig = {
  submitButtonLayout:"fullWidth"
}


const rgistrationconfig = [
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
      valueKey: "fname",
      fieldProps: {
        label: "First Name",
        placeholder: "Enter First Name",
        helperText: "Please fill your first name",
      },
    },
    

    {
      type: "text",
      valueKey: "lname",
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
    valueKey: "postalcode",
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
        isColumner: true,
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
      label: "Do you have any allegeries and/or food intolerances ?",
      fullwidth: true,
      helperText:
        "I hereby consent to the following information regarding allergies and intolerances being shared and processed as part of the event.",
    },
  },
  {
    type: "text",
    valueKey: "submitquestions",
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
      label: "Title",
      booleanLabel:"I agree to the Terms & Conditions and Privacy Policy Terms & Conditions and Privacy Policy",
    },
    
  },
];




const testformconfig = [
  {
    type: "text",
    valueKey: "place",
    fieldProps: {
      label: "Name of the Place",
    },
  },
  [
    {
      type: "text",
      valueKey: "contact",
      fieldProps: {
        label: "Contact Number",
        className: "labeltextred",
      },
    },
    {
      type: "text",
      valueKey: "rlink",
      fieldProps: {
        label: "Reservation Link",
      },
    },
  ],

  [
    {
      type: "text",
      valueKey: "tandd",
      fieldProps: {
        label: "Takeout & Delivery",
      },
    },
    {
      type: "text",
      valueKey: "website",
      fieldProps: {
        label: "Website",
      },
    },
  ],
  [
    {
      type: "text",
      valueKey: "email",
      fieldProps: {
        label: "Email",
        placeholder: "Enter email",
      },
    },
    {
      type: "text",
      valueKey: "iglink",
      fieldProps: {
        label: "Instagram Link",
      },
    },
  ],
  {
    type: "text",
    valueKey: "sdis",
    fieldProps: {
      label: "Short Discription",
    },
  },
  {
    type: "text",
    valueKey: "dis",
    fieldProps: {
      label: "Discription",
    },
  },
  [
    {
      type: "checkbox",
      fieldProps: {
        options:[
          { value: "Distillery", name: "Distillery" },
          { value: "Brewery", name: "Brewery" },
          { value: "Restaurant", name: "Restaurant" },
          { value: "Bar", name: "Bar" },
          { value: "Cafe", name: "Cafe" },
          { value: "Cooking School", name: "Cooking School" },
          { value: "Food Hall", name: "Food Hall" },
          { value: "Bakery", name: "Bakery" },
          { value: "Food Truck", name: "Food Truck" },
        ],
        label: "Place Type",
        isColumner: true,
        name: "place",
        id: "",
      },
      valueKey: "placetype",
    },
    {
      type: "radio",
      fieldProps: {
        options:[
          { value: "$", name: "$" },
          { value: "$$", name: "$$" },
          { value: "$$$", name: "$$$" },
          { value: "$$$$", name: "$$$$" },
        ],
        name: "range",
        label: "$ Range",
        isColumner: true,
        id: "",
      },
      valueKey: "range",
    },
  ],
  [
    {
      type: "array",
      valueKey: "arrayText",
      fieldProps: {
        itemType: "text",
        defaultItemValue: "",
        arrayItemFieldProps: {
          label: "Label",
        },
      },
    },
  ],
];

function App() {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    place: Yup.array().min(1, "Required").required("Required"),
    range: Yup.string().required("Required"),
    dis: Yup.string().required("Required"),
    sdis: Yup.string().required("Required"),
    iglink: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    tandd: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    placetype: Yup.array().min(1, "Required").required("Required"),
    rlink: Yup.string().required("Required"),
    contact: Yup.string().required("Phone number is required"),
    arrayText: Yup.array().of(
      Yup.string().required("At least one string is required")
    ),
    title: Yup.string().required("Required"),
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    postalcode: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNo: Yup.string().required("Phone No. Required"),
    language: Yup.array().min(1, "Required").required("Required"),
    allergies: Yup.string().required("Required"),
    submitquestions: Yup.string().required("Required"),
    agreement: Yup.boolean().required("Required"),
    file: Yup.mixed().required("Required")
    .test('fileSize', 'File size must be less than 5 MB', (value) => {
      return value && value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'File must be of type jpg or png', (value) => {
      return value && (value.type === 'image/jpeg' || value.type === 'image/png');
    }),
  });
  
  const initialValues = {};
  return (
    <div className="App">
      <ReactForm
        config={testformconfig}
        initialValues={initialValues}
        isInProgress={loading}
        validationSchema={validationSchema}
        // actionConfig={myActionConfig}
        onSubmit={(values: object) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => setLoading(false), 200);
        } }    
        />   
      

    <ReactForm
        config={rgistrationconfig}
        initialValues={initialValues}
        isInProgress={loading}
        validationSchema={validationSchema}
        actionConfig={myActionConfig}
        onSubmit={(values: object) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => setLoading(false), 1000);
        }}
       

/>

        
     
    </div>
  );
}
export default App;

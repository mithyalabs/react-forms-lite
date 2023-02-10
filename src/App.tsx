import React, { useState } from "react";
import "./App.scss";
import { Option } from "./Types/index";
import * as Yup from "yup";
import { RadioFieldProps } from "./components/Radio/index";
import { CheckboxFieldProps } from "./components/CheckBox/index";
import TestForm from "./components/TestForm1";
import RegistrationForm from "./components/TestForm2";
import { SelectFProps } from "./components/SelectField";
import { SwitchFieldProps } from "./components/Switch";
import {FormActionProps} from "./components/FormBuilder"

const myActionConfig:FormActionProps = {
  submitButtonLayout:"fullWidth"
}

const genderoptions: Option[] = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "other", name: "Other" },
];
const languageoptions: Option[] = [
  { value: "english", name: "English" },
  { value: "hindi", name: "Hindi" },
  { value: "french", name: "French" },
];
const titleOptions: Option[] = [
  { value: "Mr", name: "Mr" },
  { value: "Mrs", name: "Mrs" },
  { value: "Miss", name: "Miss" },
];
const relationOptions: Option[] = [
  { value: "Customer", name: "Customer" },
  { value: "Partner", name: "Partner" },
  { value: "Employee", name: "Employee" },
  { value: "Other", name: "Other" },
];
const agreementoptions: Option[] = [
  { value: "english", name: "English" },
  { value: "hindi", name: "Hindi" },
  { value: "french", name: "French" },
];
const RadioFP: RadioFieldProps = {
  name: "gender",
  options: genderoptions,
  label: "Select gender",
  helperText: "Select any one option",
  isColumner: true,
};
const SelectFP: SelectFProps = {
  name: "language",
  options: languageoptions,
  label: "Language",
  emptyItem: "Select something",
  helperText: "Select your language",
};
const tilte: SelectFProps = {
  name: "title",
  options: titleOptions,
  label: "Title",
  emptyItem: "Select Title",
  helperText: "Select any one option",

};
const relationRadio: RadioFieldProps = {
  name: "relation",
  options: relationOptions,
  label: "Relation with Micro Focus",
  helperText: "Select any one option",
  isColumner: true,
};
const SwitchFP: SwitchFieldProps = {
  name: "switch",
  label: "Toggle",
  helperText: "Click for toggle",
};
const agreement: CheckboxFieldProps = {
  name: "agreement",
  // options: agreementoptions,
  booleanLabel:"I agree to the Terms & Conditions and Privacy Policy Terms & Conditions and Privacy Policy",
};
const rgistrationconfig = [
  [
    {
      type: "select",
      fieldProps: tilte,
      valueKey: "title",
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
      fieldProps: RadioFP,
      valueKey: "gender",
    },
    {
      type: "switch",
      fieldProps: SwitchFP,
      valueKey: "toggle",
    },
  ],

  [
    {
      type: "checkbox",
      fieldProps: SelectFP,
      valueKey: "language",
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
    fieldProps: agreement,
    valueKey: "agreement",
  },
];

const rangeoptions: Option[] = [
  { value: "$", name: "$" },
  { value: "$$", name: "$$" },
  { value: "$$$", name: "$$$" },
  { value: "$$$$", name: "$$$$" },
];
const placetypeoptions: Option[] = [
  { value: "Distillery", name: "Distillery" },
  { value: "Brewery", name: "Brewery" },
  { value: "Restaurant", name: "Restaurant" },
  { value: "Bar", name: "Bar" },
  { value: "Cafe", name: "Cafe" },
  { value: "Cooking School", name: "Cooking School" },
  { value: "Food Hall", name: "Food Hall" },
  { value: "Bakery", name: "Bakery" },
  { value: "Food Truck", name: "Food Truck" },
];

const TestCheckBoxFP: CheckboxFieldProps = {
  options: placetypeoptions,
  label: "Place Type",
  isColumner: true,
  name: "place",
  id: "",
};
const TestRadioFP: RadioFieldProps = {
  name: "range",
  options: rangeoptions,
  label: "$ Range",
  isColumner: true,
  id: "",
};

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
      fieldProps: TestCheckBoxFP,
      valueKey: "placetype",
    },
    {
      type: "radio",
      fieldProps: TestRadioFP,
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
    agreement: Yup.array().min(1, "Required").required("Required"),
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
      <TestForm
        config={testformconfig}
        initialValues={initialValues}
        isInProgress={loading}
        validationSchema={validationSchema}
        // actionConfig={myActionConfig}
        onSubmit={(values: object) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => setLoading(false), 200);
        }}
      />
      <RegistrationForm
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

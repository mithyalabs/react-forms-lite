import {useState} from "react";
import "./index.scss";
import * as Yup from "yup";
import ReactForm from "../lib/ReactForm"


const myActionConfig = {
    submitButtonLayout:"fullWidth"
  }
  
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
          isColumn: true,
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
          isColumn: true,
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

import React from 'react';
const PlaceDetailsForm: React.FC = () => {
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
        ),})
return (
    <div>
        <ReactForm
        config={testformconfig}
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
export default PlaceDetailsForm;
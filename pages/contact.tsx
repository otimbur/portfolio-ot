import React from "react";
import { StyledBtn2 } from "../components/Button";
import styleContact from "../styles/Contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../lib/api";
import { useRouter } from "next/router";
import Image from "next/image";
import { color } from "@mui/system";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  notes: "",
};

const validate = (values: any) => {};
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  notes: Yup.string().required("Please let me know how I can help"),
});
const Contact = () => {
  const router = useRouter();

  const onSubmit = (values: any) => {
    console.log("submitting form", values);
    sendContactForm(values);
    router.push({ pathname: "/sent" });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styleContact.contactContainer}>
      <div className={styleContact.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <label className={styleContact.label} htmlFor="firstName">
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : "First name"}
          </label>
          <input
            className={styleContact.input}
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          <label className={styleContact.label} htmlFor="lastName">
            {formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : "Last name"}
          </label>
          <input
            className={styleContact.input}
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label className={styleContact.label} htmlFor="email">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "E-mail"}
          </label>
          <input
            className={styleContact.input}
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label className={styleContact.label} htmlFor="notes">
            {formik.touched.notes && formik.errors.notes
              ? formik.errors.notes
              : "Notes"}
          </label>
          <input
            className={styleContact.input}
            type="text"
            id="notes"
            name="notes"
            onChange={formik.handleChange}
            value={formik.values.notes}
            onBlur={formik.handleBlur}
          />
          <StyledBtn2 className={styleContact.submitBtn} type="submit">
            Submit
          </StyledBtn2>
        </form>
      </div>
    </div>
  );
};

export default Contact;

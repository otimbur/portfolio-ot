import { Typography } from "@mui/material";
import React from "react";
import { StyledBtn2 } from "../components/Button";
import styleContact from "../styles/Contact.module.css";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../lib/api";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  notes: "",
};
const onSubmit = (values: any) => {
  sendContactForm(values);
};

const validate = (values: any) => {};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  notes: Yup.string().required("Required"),
});
const Contact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styleContact.contactContainer}>
      <Typography
        className={styleContact.formName}
        variant="h4"
        sx={{ color: "black", fontFamily: "monospace", fontWeight: "bold" }}
      >
        Get In Touch
      </Typography>

      <div className={styleContact.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <label className={styleContact.label} htmlFor="firstName">
            First name
          </label>
          <input
            className={styleContact.input}
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label className={styleContact.label} htmlFor="lastName">
            Last name
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
            E-mail
          </label>
          <input
            className={styleContact.input}
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label className={styleContact.label} htmlFor="notes">
            Notes
          </label>
          <input
            className={styleContact.input}
            type="text"
            id="notes"
            name="notes"
            onChange={formik.handleChange}
            value={formik.values.notes}
          />
          <StyledBtn2
            className={styleContact.submitBtn}
            type="submit"
            disabled={
              !formik.values.firstName ||
              !formik.values.lastName ||
              !formik.values.email ||
              !formik.values.notes
            }
          >
            Submit
          </StyledBtn2>
        </form>
      </div>
    </div>
  );
};

export default Contact;

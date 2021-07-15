import "./LoginForm.css";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';

function LoginForm() {

    const handleValidation = () => {
        console.log("Validation was invoked");
    };
    return (
        <>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validate = {handleValidation}
            >
                <Form>
                    <label htmlFor="email">Email id</label>
                    <Field id="email" name="email" placeholder="Enter Email" type="email"/>
                    {/* <ErrorMessage name="email" >{error}</ErrorMessage> */}

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Enter Password" type="password" />
                    {/* <ErrorMessage name="password" >{error}</ErrorMessage> */}

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                    />
                    {/* <ErrorMessage name="confirmPassword" >{error}</ErrorMessage> */}

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default LoginForm;

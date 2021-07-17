import "./LoginForm.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

function LoginForm() {

    // const handleValidation = (values: any, actions : any) => {
    //     console.log("Validation was invoked");
    //     return new Promise<void>((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve()
    //             alert(JSON.stringify(values));
    //         }, 5000)
    //     });
    // }

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is Required'),
    });

    const PasswordSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is Required')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
              ),
    });

    const validatePassword = (value : any) =>{
        var error = undefined;
        try{
            PasswordSchema.validateSync({password: value})
        } catch(validationError){
            error = validationError.errors[0];
        }
        return error;
    }
 
    return (
        <>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={LoginSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="email">Email id</label>
                        <Field id="email" name="email" placeholder="Enter Email" type="email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <ErrorMessage name="email" className="errorMsg" />

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="Enter Password" type="password" validate={validatePassword} />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <ErrorMessage name="password" className="errorMsg"/>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm;

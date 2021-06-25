import "./RegistrationForm.css";
import { useState } from "react";

function RegistrationForm() {

    const [fields, setFields] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileno: '',
        password: '',
        confirmpass: ''
    });
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileno: '',
        password: '',
        confirmpass: ''
    });

    const validateForm = () => {
        let formIsValid = true;

        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your Firstname.";
        }

        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your Lastname.";
        }

        if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["confirmpass"]) {
            formIsValid = false;
            errors["confirmpass"] = "*Please confirm your password.";
        }

        if (typeof fields["confirmpass"] !== "undefined") {
            if (!fields["confirmpass"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) || (fields["confirmpass"] !== fields["password"])) {
                formIsValid = false;
                errors["confirmpass"] = "*Please enter secure and strong password.";
                if (fields["confirmpass"] !== fields["password"]) {
                    errors["confirmpass"] = "*Your password doesnt match";
                }
            }
        }

        // this.setState({
        //   errors: errors
        // });
        setErrors(errors);
        return formIsValid;

    };

    const submituserRegistrationForm = (e: { preventDefault: () => void; }) => {
        console.log(validateForm);

        e.preventDefault();
        // if (validateForm) {
        // console.log(this.state);
        setFields(fields);
        // console.log(this.state);
        alert("Form submitted");
        // }

    };

    return (
        <div>
            <div className="heading">Registration Form</div>
            <form method="post" name="userRegistrationForm" onSubmit={submituserRegistrationForm} >
                <div>
                    <span>
                        <label className="labelField">Enter your Firstname : </label>
                        <input type="text" className="inputField" name="firstname" value={fields.firstname} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, firstname: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.firstname}</span>
                    </span>
                    <span>
                        <label className="labelField">Enter your Lastname : </label>
                        <input type="text" className="inputField" name="lastname" value={fields.lastname} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, lastname: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.lastname}</span>
                    </span>
                </div>
                <div>
                    <span>
                        <label className="labelField">Enter your Email : </label>
                        <input type="email" className="inputField" name="email" value={fields.email} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, email: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.email}</span>
                    </span>
                </div>
                <div>
                    <span>
                        <label className="labelField">Enter your Mobile No. : </label>
                        <input type="text" className="inputField" name="mobileno" value={fields.mobileno} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, mobileno: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.mobileno}</span>
                    </span>
                </div>
                <div>
                    <span>
                        <label className="labelField">Enter your Password : </label>
                        <input type="password" className="inputField" name="password" value={fields.password} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, password: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.password}</span>
                    </span>
                </div>
                <div>
                    <span>
                        <label className="labelField">Confirm Password : </label>
                        <input type="password" className="inputField" name="confirmpass" value={fields.confirmpass} onChange={e => {
                            const val = e.target.value;
                            setFields(prevState => {
                                return { ...prevState, confirmpass: val }
                            });
                        }}></input>
                        <span className="errorMsg">{errors.confirmpass}</span>
                    </span>
                </div>
                <div>
                    <span>
                        <input type="submit" className="buttonField" value="Register" />
                    </span>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;

import "./RegistrationForm.css";

function RegistrationForm() {
    return (
        <div>
            <div className="heading">Registration Form</div>
            <div>
                <span>
                    <label className="labelField">Enter your Firstname : </label>
                    <input type="text" className="inputField"></input>
                </span>
                <span>
                    <label className="labelField">Enter your Lastname : </label>
                    <input type="text" className="inputField"></input>
                </span>
            </div>
            <div>
                <span>
                    <label className="labelField">Enter your Email : </label>
                    <input type="email" className="inputField"></input>
                </span>
            </div>
            <div>
                <span>
                    <label className="labelField">Enter your Password : </label>
                    <input type="password" className="inputField"></input>
                </span>
            </div>
            <div>
                <span>
                    <label className="labelField">Confirm Password : </label>
                    <input type="password" className="inputField"></input>
                </span>
            </div>
            <div>
                <span>
                    <button className="buttonField">Create account</button>
                </span>
            </div>
        </div>
    )
}

export default RegistrationForm;

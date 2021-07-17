# RegistrationForm_React_v17

### React version 17 Registration Page with validations

## Observations while working with Objects and useState Hook - 

There are two things you need to keep in mind about updates when using objects:

# 1. The importance of immutability - If you use the same value as the current state to update the state (React uses Object.is for comparing), React won’t trigger a re-render.
# 2. And the fact that the setter returned by useState doesn’t merge objects like setState() does in class components
Hence, preferred way of doing this is that one can replicate the behavior of setState() by using the function argument that contains the object to be replaced and the object    spread syntax:

    onChange={e => {
    const val = e.target.value;
    setMessage(prevState => {
      return { ...prevState, message: val }
    });
    }}

# 3. Use Formik Library for creating controlled forms and Yup for schema Validation
# 4. Uncontrolled Forms are preferred in case of read only fields of form like Upload file.
# 5. React Hook Form library can also be used for desiging forms as it overcomes few drawbacks of Formik such as re-rendering at each change in form field.

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date, InferType } from 'yup';

let userSchema = object().shape({
  login: string().required(),
  password: string().min(4).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};
const submitHandler = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

export const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={submitHandler}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

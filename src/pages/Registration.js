import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useLocation } from 'react-router-dom';
export default function Registration() {
  let history = useLocation();
  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={{
          company: '',
          website: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // actions.setSubmitting(false);
          }, 1000);
          history.push('./dashboard');
        }}
      >
        <Form>
          <Field type="text" name="company" placeholder="startup name" />
          <Field type="text" name="website" placeholder="website " />
          <button type="submit">Create Startup</button>
        </Form>
      </Formik>
    </div>
  );
}

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './App.css';

export default function FieldCheckBoxComponent({ name, errors, labelText }) {
	return (
		<>
			<Field type='checkbox' name={name} />
			{errors ? <ErrorMessage name={name} component='div' /> : null}
			<label htmlFor={name}>{labelText}</label>
		</>
	);
}

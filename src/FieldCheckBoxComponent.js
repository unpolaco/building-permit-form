import React from 'react';
import { Field } from 'formik';
import './App.css';

export default function FieldCheckBoxComponent({ name, labelText }) {
	return (
		<fieldSet className='checkboxWrapper'>
			<Field type='checkbox' name={name} id={name}/>
			<label htmlFor={name}>{labelText}</label>
		</fieldSet>
	);
}

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './App.css';

export default function FieldComponent({name, classInput, errors, values, labelText}) {
	return (
		<fieldset>
			<Field type='text' name={name} />
			<label className='animatedLabel' htmlFor={name}>
				{labelText}
			</label>
			{errors ? 
			<ErrorMessage className='errorText' name={name} component='div' />
			: null }
		</fieldset>
	);
}

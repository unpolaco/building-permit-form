import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './App.css';

export default function FieldTextComponent({
	name,
	classInput,
	classFieldSet,
	errors,
	touched,
	values,
	labelText,
}) {
	return (
		<fieldset className={classFieldSet}>
			<Field
				className={touched && errors ? `errorColor ${classInput}` : classInput}
				type='text'
				name={name}
			/>
			<label className={touched && values !=="" ? 'labelFilled' : 'labelEmpty'} htmlFor={name}>
				{labelText}
			</label>
			{touched && errors ? (
				<ErrorMessage className='errorText' name={name} component='div' />
			) : null}
		</fieldset>
	);
}

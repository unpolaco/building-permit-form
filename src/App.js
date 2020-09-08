import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './App.css';
import FieldTextComponent from './FieldTextComponent';
import FieldCheckBoxComponent from './FieldCheckBoxComponent';
import fields from './assets/FieldsData';

const postalCodeRegExp = /^([0-9]{2})(-[0-9]{3})?$/i;
const phoneRegExp = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;
const letters = /[a-ząćęłńóśżźA-ZĄĆĘŁŃÓŚŹŻ]{4,150}/;

export default function App() {
	const ValidationSchema = Yup.object().shape({
		departmentName: Yup.string().required('Uzupełnij dane'),
		changeProposalDate: Yup.date(),
		changeProposalNumber: Yup.string(),
		name: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		country: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		voivodeship: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		county: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		community: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		city: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		street: Yup.string()
			.matches(letters, 'Niepoprawne dane')
			.required('Uzupełnij dane'),
		buildingNumber: Yup.string().required('Uzupełnij dane'),
		localNumber: Yup.string(),
		postalCode: Yup.string()
			.matches(postalCodeRegExp, 'Niepoprawny numer telefonu')
			.required('Uzupełnij dane'),
		phone: Yup.string().matches(phoneRegExp, 'Niepoprawny numer telefonu'),
		email: Yup.string().email('Niepoprawny adres email'),
		newBuildingPermitCheckbox: Yup.boolean(),
		changeBuildingPermitCheckbox: Yup.boolean(),
	});

	return (
		<Formik
			initialValues={{
				departmentName: '',
				changeProposalDate: '',
				changeProposalNumber: '',
				name: '',
				country: '',
				voivodeship: '',
				county: '',
				community: '',
				city: '',
				street: '',
				buildingNumber: '',
				localNumber: '',
				postalCode: '',
				phone: '',
				email: '',
				newBuildingPermitCheckbox: false,
				changeBuildingPermitCheckbox: false,
			}}
			validationSchema={ValidationSchema}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ handleSubmit, values, errors }) => (
				<Form className='wrapper' onSubmit={handleSubmit}>
					<h1 className='title'>
						WNIOSEK O POZWOLENIE NA BUDOWĘ LUB ROZBIÓRKĘ (B-1)
					</h1>
					<p className='description center'>
						(podstawa prawna: art. 32 i art. 33 ustawy z dnia 7 lipca 1994 r. –
						Prawo budowlane)
					</p>
					<ol>
						<li>
							<p className='description bold'>
								Proszę wpisać nazwę organu właściwego do wydania pozwolenia
								(organ, do którego kierowany jest wniosek):
							</p>
							<FieldTextComponent
								autoFocus
								name='departmentName'
								labelText='nazwa urzędu'
								classInput={errors.departmentName ? `errorColor long` : 'long'}
								errors={errors.departmentName}
								values={values.departmentName}
							/>
						</li>
						<li>
							<p className='description bold'>
								Proszę oznaczyć znakiem X cel złożenia wniosku:
							</p>
							<FieldCheckBoxComponent
								name='newBuildingPermitCheckbox'
								errors={errors.newBuildingPermitCheckbox}
								labelText='Wniosek o pozwolenie na budowę lub rozbiórkę'
							/>
							<br />
							<FieldCheckBoxComponent
								name='changeBuildingPermitCheckbox'
								errors={errors.changeBuildingPermitCheckbox}
								labelText='Wniosek o zmianę pozwolenia na budowę lub rozbiórkę z dnia'
							/>
							{values.changeBuildingPermitCheckbox === true ? (
								<>
									<FieldTextComponent
										name='changeProposalDate'
										labelText='data wniosku'
										classFieldSet='leftMargin'
										classInput={
											errors.departmentName ? `errorColor short` : 'short'
										}
										errors={errors.changeProposalDate}
										values={values.changeProposalDate}
									/>
									<span className='description'>numer</span>
									<FieldTextComponent
										name='changeProposalNumber'
										labelText='nr wniosku'
										classFieldSet='leftMargin'
										classInput={
											errors.departmentName ? `errorColor short` : 'short'
										}
										errors={errors.changeProposalNumber}
										values={values.changeProposalNumber}
									/>
								</>
							) : null}
						</li>
						<li>
							<p className='description bold'>
								Proszę wpisać dane inwestora (w tym adres zamieszkania lub
								siedziby):
							</p>
							{fields.map((field) => (
								<>
									<FieldTextComponent
										key={field.name}
										name={field.name}
										labelText={field.labelText}
										classInput={field.classInput}
										errors={errors[field.name]}
										values={values[field.name]}
									/>
									{field.name === 'city' ? <br /> : null}
								</>
							))}
						</li>
					</ol>
					<button type='submit'>Wyślij</button>
				</Form>
			)}
		</Formik>
	);
}

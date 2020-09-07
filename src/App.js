import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const postalCodeRegExp = /^([0-9]{2})(-[0-9]{3})?$/i;
const phoneRegExp = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;
const letters = /[a-ząćęłńóśżźA-ZĄĆĘŁŃÓŚŹŻ]{4,150}/;

export default function App() {
	const ValidationSchema = Yup.object().shape({
		departmentName: Yup.string().required('Uzupełnij dane'),
		changeProposalDate: Yup.date(),
		changeProposalNumber: Yup.string(),
		name: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		country: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		voivodeship: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		county: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		community: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		city: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		street: Yup.string().matches(letters, 'Niepoprawne dane').required('Uzupełnij dane'),
		buildingNumber: Yup.string().required('Uzupełnij dane'),
		localNumber: Yup.string(),
		postalCode: Yup.string()
			.matches(postalCodeRegExp, 'Niepoprawny numer telefonu')
			.required('Uzupełnij dane'),
		phone: Yup.string().matches(phoneRegExp, 'Niepoprawny numer telefonu'),
		email: Yup.string().email('Niepoprawny adres email'),
	});

	return (
		<Formik
			className='wrapper'
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
			}}
			validationSchema={ValidationSchema}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ handleSubmit, errors }) => (
				<Form onSubmit={handleSubmit}>
					<h1>WNIOSEK O POZWOLENIE NA BUDOWĘ LUB ROZBIÓRKĘ (B-1)</h1>
					<p className='center'>
						(podstawa prawna: art. 32 i art. 33 ustawy z dnia 7 lipca 1994 r. –
						Prawo budowlane)
					</p>
					<ol>
						<li>
							<b>
								Proszę wpisać nazwę organu właściwego do wydania pozwolenia
								(organ, do którego kierowany jest wniosek):
							</b>
							<section>
								<fieldset>
									<Field
										className='long'
										type='text'
										name='departmentName'
										autoFocus
									/>
									<label className='animatedLabel' htmlFor='departmentName'>
										nazwa urzędu
									</label>
									<ErrorMessage name='departmentName' component='div' />
								</fieldset>
							</section>
						</li>

						<li>
							<b>Proszę oznaczyć znakiem X cel złożenia wniosku:</b>
							<section>
								<div className='smallwrapper'>
									<Field type='checkbox' id='2.1' name='2.1' />
									<label htmlFor='2.1'>
										Wniosek o pozwolenie na budowę lub rozbiórkę
									</label>
									<br />
								</div>
								<Field type='checkbox' id='2.2' name='2.2' />
								<label htmlFor='2.2'>
									Wniosek o zmianę pozwolenia na budowę lub rozbiórkę z dnia{' '}
									{'\u00A0'}
								</label>
								<fieldset>
									<Field
										className='short'
										type='text'
										id='changeProposalDate'
										name='changeProposalDate'
									/>
									<label className='animatedLabel' htmlFor='changeProposalDate'>
										data wniosku
									</label>
									<ErrorMessage name='changeProposalDate' component='div' />
								</fieldset>
								<label htmlFor='changeProposalNumber'>nr {'\u00A0'}</label>
								<fieldset>
									<Field
										className='short'
										type='text'
										id='changeProposalNumber'
										name='changeProposalNumber'
									/>
									<label
										className='animatedLabel'
										htmlFor='changeProposalNumber'
									>
										nr wniosku
									</label>
									<ErrorMessage name='changeProposalNumber' component='div' />
								</fieldset>
							</section>
						</li>

						<li>
							<b>
								Proszę wpisać dane inwestora (w tym adres zamieszkania lub
								siedziby):
							</b>
							<section>
								<fieldset>
									<Field className='long' type='text' name='name' />
									<label className='animatedLabel' htmlFor='name'>
										imię i nazwisko lub nazwa inwestora
									</label>
									<ErrorMessage name='name' component='div' />
								</fieldset>
								<fieldset>
									<Field type='text' name='country' />
									<label className='animatedLabel' htmlFor='country'>
										kraj
									</label>
									<ErrorMessage name='country' component='div' />
								</fieldset>
								<fieldset>
									<Field type='text' name='voivodeship' />
									<label className='animatedLabel' htmlFor='voivodeship'>
										województwo
									</label>
									<ErrorMessage name='voivodeship' component='div' />
								</fieldset>
								<fieldset>
									<Field type='text' name='county' />
									<label className='animatedLabel' htmlFor='county'>
										powiat
									</label>
									<ErrorMessage name='county' component='div' />
								</fieldset>
								<fieldset>
									<Field type='text' name='community' />
									<label className='animatedLabel' htmlFor='community'>
										gmina
									</label>
									<ErrorMessage name='community' component='div' />
								</fieldset>
								<fieldset>
									<Field type='text' name='city' />
									<label className='animatedLabel' htmlFor='city'>
										miejscowość
									</label>
									<ErrorMessage name='city' component='div' />
								</fieldset>
								<br />
								<fieldset>
									<Field type='text' name='street' />
									<label className='animatedLabel' htmlFor='street'>
										ulica
									</label>
									<ErrorMessage name='street' component='div' />
									{errors.street}
								</fieldset>
								<fieldset>
									<Field className='short' type='text' name='buildingNumber' />
									<label className='animatedLabel' htmlFor='buildingNumber'>
										nr budynku
									</label>
									<ErrorMessage name='buildingNumber' component='div' />
									{errors.buildingNumber}
								</fieldset>
								<fieldset>
									<Field className='short' type='text' name='localNumber' />
									<label className='animatedLabel' htmlFor='localNumber'>
										nr lokalu
									</label>
									<ErrorMessage name='localNumber' component='div' />
								</fieldset>
								<fieldset>
									<Field className='short' type='text' name='postalCode' />
									<label className='animatedLabel' htmlFor='postalCode'>
										kod pocztowy
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='phone' />
									<label className='animatedLabel' htmlFor='phone'>
										telefon
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='email' />
									<label className='animatedLabel' htmlFor='email'>
										e-mail
									</label>
									<ErrorMessage name='email' component='div' />
								</fieldset>
								<br />
							</section>
						</li>
					</ol>
					<button type='submit'>Wyślij</button>
				</Form>
			)}
		</Formik>
	);
}

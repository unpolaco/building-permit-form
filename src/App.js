import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function App() {
	const ValidationSchema = Yup.object().shape({
		// name: Yup.string().required('Required'),
		// country: Yup.string().required('Required'),
		// voivodeship: Yup.string().required('Required'),
		// county: Yup.string().required('Required'),
		// community: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		street: Yup.string().required('Required'),
		buildingNumber: Yup.number()
			.typeError('must be a number')
			.integer('fjfjdddddddddddddddddddddddjv'),
		// .required('Required'),
		localNumber: Yup.number().integer('fjfdddddddddddddddjjv'),
		postalCode: Yup.string().required('Required'),
		phone: Yup.string().required('Required'),
		email: Yup.string().email('Must be an email address'),
	});
	return (
		<Formik
			class='wrapper'
			initialValues={{
				// name: '',
				// country: '',
				// voivodeship: '',
				// county: '',
				// community: '',
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
					<p class='center'>
						(podstawa prawna: art. 32 i art. 33 ustawy z dnia 7 lipca 1994 r. –
						Prawo budowlane)
					</p>
					<ol>
						{/* <li>
							<b>
								Proszę wpisać nazwę organu właściwego do wydania pozwolenia
								(organ, do którego kierowany jest wniosek):
							</b>
							<form>
								<fieldset>
									<Field
										class='long'
										type='text'
										name='departmentName'
										required
										autofocus
									/>
									<label class='animatedLabel' for='departmentName'>
										nazwa urzędu
									</label>
								</fieldset>
							</form>
						</li>

						<li>
							<b>Proszę oznaczyć znakiem X cel złożenia wniosku:</b>
							<form>
								<div class='smallwrapper'>
									<Field type='checkbox' id='2.1' />
									<label for='2.1'>
										Wniosek o pozwolenie na budowę lub rozbiórkę
									</label>
									<br />
								</div>
								<Field type='checkbox' id='2.2' />
								<label for='2.2'>
									Wniosek o zmianę pozwolenia na budowę lub rozbiórkę z dnia
									&nbsp&nbsp
								</label>
								<fieldset>
									<Field class='short' type='text' id='changeProposalDate' />
									<label class='animatedLabel' for='changeProposalDate'>
										data wniosku
									</label>
								</fieldset>
								<label for='changeProposalNumber'>nr &nbsp&nbsp</label>
								<fieldset>
									<Field class='short' type='text' id='changeProposalNumber' />
									<label class='animatedLabel' for='changeProposalNumber'>
										nr wniosku
									</label>
								</fieldset>
							</form>
						</li> */}

						<li>
							<b>
								Proszę wpisać dane inwestora (w tym adres zamieszkania lub
								siedziby):
							</b>
							<form>
								{/* <fieldset>
									<Field class='long' type='text' name='name' required />
									<label class='animatedLabel' for='name'>
										imię i nazwisko lub nazwa inwestora
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='country' required />
									<label class='animatedLabel' for='country'>
										kraj
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='voivodeship' required />
									<label class='animatedLabel' for='voivodeship'>
										województwo
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='county' required />
									<label class='animatedLabel' for='county'>
										powiat
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='community' required />
									<label class='animatedLabel' for='community'>
										gmina
									</label>
								</fieldset> */}
								<fieldset>
									<Field type='text' name='city' />
									<label class='animatedLabel' for='city'>
										miejscowość
									</label>
									<ErrorMessage name='city' component='div' />
								</fieldset>
								<br />
								<fieldset>
									<Field type='text' name='street' />
									<label class='animatedLabel' for='street'>
										ulica
									</label>
									<ErrorMessage name='street' component='div' />
									{errors.street}
								</fieldset>
								<fieldset>
									<Field class='short' type='text' name='buildingNumber' />
									<label class='animatedLabel' for='buildingNumber'>
										nr budynku
									</label>
									<ErrorMessage name='buildingNumber' component='div' />
									{errors.buildingNumber}
								</fieldset>
								<fieldset>
									<Field class='short' type='text' name='localNumber' />
									<label class='animatedLabel' for='localNumber'>
										nr lokalu
									</label>
									<ErrorMessage name='localNumber' component='div' />
								</fieldset>
								<fieldset>
									<Field class='short' type='text' name='postalCode' />
									<label class='animatedLabel' for='postalCode'>
										kod pocztowy
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='phone' />
									<label class='animatedLabel' for='phone'>
										telefon
									</label>
								</fieldset>
								<fieldset>
									<Field type='text' name='email' />
									<label class='animatedLabel' for='email'>
										e-mail
									</label>
									<ErrorMessage name='email' component='div' />
								</fieldset>
								<br />
								<button type='submit'>Wyślij</button>
							</form>
						</li>
					</ol>
				</Form>
			)}
		</Formik>
	);
}

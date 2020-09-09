import React from 'react';
import { Formik, Form } from 'formik';
import './App.css';
import FieldTextComponent from './FieldTextComponent';
import FieldCheckBoxComponent from './FieldCheckBoxComponent';
import fields from './assets/FieldsData';
import {initialValues} from './Validation'
import {validationSchema} from './Validation'

export default function App() {

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ handleSubmit, values, errors, touched }) => (
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
								classInput='long'
								errors={errors.departmentName}
								touched={touched.departmentName}
								values={values.departmentName}
							/>
						</li>
						<li>
							<p className='description bold'>
								Proszę oznaczyć znakiem X cel złożenia wniosku:
							</p>
							<FieldCheckBoxComponent
								name='newBuildingPermitCheckbox'
								labelText='Wniosek o pozwolenie na budowę lub rozbiórkę'
							/>
							<br />
							<FieldCheckBoxComponent
								name='changeBuildingPermitCheckbox'
								labelText='Wniosek o zmianę pozwolenia na budowę lub rozbiórkę z dnia'
							/>
							{values.changeBuildingPermitCheckbox === true ? (
								<>
									<FieldTextComponent
										name='changeProposalDate'
										labelText='data wniosku'
										classFieldSet='leftMargin'
										classInput='short'
										errors={errors.changeProposalDate}
										touched={touched.changeProposalDate}
										values={values.changeProposalDate}
									/>
									<span>numer</span>
									<FieldTextComponent
										name='changeProposalNumber'
										labelText='nr wniosku'
										classFieldSet='leftMargin'
										classInput='short'
										errors={errors.changeProposalNumber}
										touched={touched.changeProposalNumber}
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
								<React.Fragment key={field.name}>
									<FieldTextComponent
										name={field.name}
										labelText={field.labelText}
										touched={touched[field.name]}
										classInput={field.classInput}
										errors={errors[field.name]}
										values={values[field.name]}
									/>
									{field.name === 'city' ? <br /> : null}
								</React.Fragment>
							))}
						</li>
					</ol>
					<button type='submit'>Wyślij</button>
				</Form>
			)}
		</Formik>
	);
}

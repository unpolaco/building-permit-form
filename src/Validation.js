import * as Yup from 'yup';

const basicRegEx = /^[a-ząćęłńóśżźA-ZĄĆĘŁŃÓŚŹŻ\s-]{4,150}$/;
const postalCodeRegEx = /^([0-9]{2})(-[0-9]{3})?$/i;
const phoneRegEx = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;

export const initialValues = {
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
};

export const validationSchema = Yup.object().shape(getValidValue(initialValues));

function getValidValue(initValues) {
	const validVal = {};
	for (const key in initValues) {
		validVal[key] = getCases(key);
	}
	return validVal;
}

function getCases(value) {
	let validVal;
	switch (value) {
		case 'departmentName':
		case 'name':
		case 'country':
		case 'voivodeship':
		case 'county':
		case 'community':
		case 'city':
		case 'street':
			validVal = Yup.string()
				.matches(basicRegEx, 'Niepoprawne dane')
				.required('Uzupełnij dane');
			break;
		case 'changeProposalDate':
			validVal = Yup.date('Niepoprawne dane');
			break;
		case 'changeProposalNumber':
			validVal = Yup.string('Niepoprawne dane');
			break;
		case 'buildingNumber':
			validVal = Yup.string().required('Uzupełnij dane');
			break;
		case 'localNumber':
			validVal = Yup.string();
			break;
		case 'postalCode':
			validVal = Yup.string()
				.matches(postalCodeRegEx, 'Niepoprawny kod pocztowy')
				.required('Uzupełnij dane');
			break;
		case 'phone':
			validVal = Yup.string().matches(phoneRegEx, 'Niepoprawny numer telefonu');
			break;
		case 'email':
			validVal = Yup.string().email('Niepoprawny adres email');
			break;
		case 'newBuildingPermitCheckbox':
		case 'changeBuildingPermitCheckbox':
			validVal = Yup.boolean();
			break;
		default:
			validVal = Yup.string();
	}
	return validVal;
}

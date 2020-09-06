import React from 'react';
import './App.css';

export default function App() {
	return (
		<form class='wrapper'>
			<h1>WNIOSEK O POZWOLENIE NA BUDOWĘ LUB ROZBIÓRKĘ (B-1)</h1>
			<p class='center'>
				(podstawa prawna: art. 32 i art. 33 ustawy z dnia 7 lipca 1994 r. –
				Prawo budowlane)
			</p>
			<ol>
				<li>
					<b>
						Proszę wpisać nazwę organu właściwego do wydania pozwolenia (organ,
						do którego kierowany jest wniosek):
					</b>
					<form>
						<fieldset>
							<input
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
							<input type='checkbox' id='2.1' />
							<label for='2.1'>
								Wniosek o pozwolenie na budowę lub rozbiórkę
							</label>
							<br />
						</div>
						<input type='checkbox' id='2.2' />
						<label for='2.2'>
							Wniosek o zmianę pozwolenia na budowę lub rozbiórkę z dnia
							&nbsp&nbsp
						</label>
						<fieldset>
							<input class='short' type='text' id='changeProposalDate' />
							<label class='animatedLabel' for='changeProposalDate'>
								data wniosku
							</label>
						</fieldset>
						<label for='changeProposalNumber'>nr &nbsp&nbsp</label>
						<fieldset>
							<input class='short' type='text' id='changeProposalNumber' />
							<label class='animatedLabel' for='changeProposalNumber'>
								nr wniosku
							</label>
						</fieldset>
					</form>
				</li>

				<li>
					<b>
						Proszę wpisać dane inwestora (w tym adres zamieszkania lub
						siedziby):
					</b>
					<form>
						<fieldset>
							<input class='long' type='text' name='name' required />
							<label class='animatedLabel' for='name'>
								imię i nazwisko lub nazwa inwestora
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='country' required />
							<label class='animatedLabel' for='country'>
								kraj
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='voivodeship' required />
							<label class='animatedLabel' for='voivodeship'>
								województwo
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='county' required />
							<label class='animatedLabel' for='county'>
								powiat
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='community' required />
							<label class='animatedLabel' for='community'>
								gmina
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='city' required />
							<label class='animatedLabel' for='city'>
								miejscowość
							</label>
						</fieldset>
						<br />
						<fieldset>
							<input type='text' name='street' required />
							<label class='animatedLabel' for='street'>
								ulica
							</label>
						</fieldset>
						<fieldset>
							<input class='short' type='text' name='buildingNumber' required />
							<label class='animatedLabel' for='buildingNumber'>
								nr budynku
							</label>
						</fieldset>
						<fieldset>
							<input class='short' type='text' name='localNumber' required />
							<label class='animatedLabel' for='localNumber'>
								nr lokalu
							</label>
						</fieldset>
						<fieldset>
							<input class='short' type='text' name='postalCode' required />
							<label class='animatedLabel' for='postalCode'>
								kod pocztowy
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='phone' required />
							<label class='animatedLabel' for='phone'>
								telefon
							</label>
						</fieldset>
						<fieldset>
							<input type='text' name='email' required />
							<label class='animatedLabel' for='email'>
								e-mail
							</label>
						</fieldset>
						<br />
						<button type='submit'>Wyślij</button>
					</form>
				</li>
			</ol>
		</form>
	);
}

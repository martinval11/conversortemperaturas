import Head from 'next/head';
import { useState } from 'react';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import Nav from '../components/Nav';

import { Button, Spacer, Textarea } from '@nextui-org/react';

import Footer from '../components/Footer';

const Home = () => {
	const [message, setMessage] = useState('');
	const [firstValue, setFirstValue] = useState('celsius');
	const [secondValue, setSecondValue] = useState('fahrenheit');
	const [dataConverted, setDataConverted] = useState('');

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const cToF = (celsius) => {
		const cTemp = celsius;
		const cToFahr = (cTemp * 9) / 5 + 32;
		const cToFahrConvertedToInt = parseInt(cToFahr);
		const message = `${cToFahrConvertedToInt} \xB0F`;
		setDataConverted(message);
	};

	const fToC = (fahrenheit) => {
		const fTemp = fahrenheit;
		const fToCel = ((fTemp - 32) * 5) / 9;
		const fToCelConvertedToInt = parseInt(fToCel);
		const message = `${fToCelConvertedToInt}\xB0C`;
		setDataConverted(message);
	};

	const convert = () => {
		if (firstValue === 'celsius' && secondValue === 'fahrenheit') {
			cToF(message);
		} else if (
			(firstValue === 'fahrenheit' && secondValue === 'fahrenheit') ||
			(firstValue === 'celsius' && secondValue === 'celsius')
		) {
			return;
		} else {
			fToC(message);
		}
	};

	const invert = () => {
		setFirstValue(secondValue);
		setSecondValue(firstValue);
	};

	return (
		<>
			<Nav />

			<Head>
				<title>Conversor de Temperaturas</title>
				<meta name='description' content='Conversor de Temperaturas' />
				<meta name='keywords' content='Convertir Temperaturas' />
				<link rel='icon' href='/thermometer.png' />
			</Head>

			<div className='container'>
				<main>
					<div className='grid'>
						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setFirstValue(e.target.value)}
									value={firstValue}
								>
									<option value='celsius'>Celsius</option>
									<option value='fahrenheit'>Fahrenheit</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								color='secondary'
								label='Temperatura a convertir'
								placeholder='Por ejemplo: 1'
								cols='30'
								rows='10'
								value={message}
								onChange={handleMessageChange}
							></Textarea>
						</div>

						<div id='invert-options-btn-container'>
							<Button
								id='invert-options-btn'
								title='Invertir'
								color='secondary'
								onPress={() => invert()}
								auto
							>
								<ArrowLeftRight />
							</Button>
						</div>

						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setSecondValue(e.target.value)}
									value={secondValue}
								>
									<option value='fahrenheit'>Fahrenheit</option>
									<option value='celsius'>Celsius</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								color='secondary'
								label='Resultado'
								cols='30'
								rows='10'
								readOnly
								value={dataConverted}
							></Textarea>
						</div>
					</div>
					<Spacer y={0.5} />
					<Button
						id='translate-btn'
						auto
						color='secondary'
						onPress={() => convert()}
					>
						Convertir
					</Button>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Home;

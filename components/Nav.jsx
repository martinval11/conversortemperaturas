import React, { useState, useEffect } from 'react';
import { Navbar, Button, Link, Text, Badge } from '@nextui-org/react';
import { Layout } from './Layout.js';
import { AcmeLogo } from './AcmeLogo.js';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import Image from 'next/image.js';

const Nav = () => {
	const [darkMode, isDarkMode] = useState(false);

	useEffect(() => {
		const get = window.localStorage.getItem('theme');

		if (get !== undefined || get !== null) {
			const element = document.body;
			if (get === 'dark') {
				element.classList.remove('light');
				element.classList.toggle('dark');
				isDarkMode(true);
			} else {
				element.classList.remove('dark');
				element.classList.toggle('light');
				isDarkMode(false);
			}
		}
	}, []);

	const Icon = () => {
		//		{theme ? <SunFill id='sun' /> : <MoonFill id='moon' />}
		if (darkMode) {
			return <SunFill />;
		} else {
			return <MoonFill />;
		}
	};

	return (
		<>
			<div id='nav-desktop'>
				<Layout>
					<Navbar shouldHideOnScroll isBordered variant='sticky'>
						<Navbar.Brand>
							<Image src='/thermometer.png' width='35px' height='35' alt='Thermometer' />
							<Text b color='inherit' hideIn='xs'>
								Conversor de Temperaturas
							</Text>
						</Navbar.Brand>
					</Navbar>
				</Layout>
			</div>
		</>
	);
};

export default Nav;

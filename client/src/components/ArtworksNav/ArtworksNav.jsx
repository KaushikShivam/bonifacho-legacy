import React from 'react';

import './ArtworksNav.scss';

import CheckBox from './../CheckBox/CheckBox';

const ArtworksNav = () => {
	return (
		<main className='ArtworksNav'>
			<section className='ArtworksNav__section'>
				<h4 className='ArtworksNav__header'>Editions</h4>
				<div className='ArtworksNav__btns'>
					<CheckBox>Limited</CheckBox>
					<CheckBox>Original</CheckBox>
				</div>
			</section>

			<section className='ArtworksNav__section'>
				<h4 className='ArtworksNav__header'>Categories</h4>
				<div className='ArtworksNav__btns'>
					<CheckBox>Contemporary</CheckBox>
					<CheckBox>Painting</CheckBox>
					<CheckBox>Post-war</CheckBox>
					<CheckBox>Impressionist</CheckBox>
					<CheckBox>Photography</CheckBox>
					<CheckBox>Abstract</CheckBox>
				</div>
			</section>
		</main>
	);
};

export default ArtworksNav;

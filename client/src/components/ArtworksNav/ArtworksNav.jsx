import React from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './ArtworksNav.scss';

import CheckBox from './../CheckBox/CheckBox';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

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

			<section className='ArtworksNav__section'>
				<h4 className='ArtworksNav__header'>Price</h4>
				<div className='ArtworksNav__slider'>
					<Range
						defaultValue={[0, 60000]}
						min={1000}
						max={60000}
						step={1000}
						// onChange={changeLevel}
					/>
				</div>
			</section>
		</main>
	);
};

export default ArtworksNav;

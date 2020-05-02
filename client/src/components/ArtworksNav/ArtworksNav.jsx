import React, { useState } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './ArtworksNav.scss';

import CheckBox from './../CheckBox/CheckBox';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const ArtworksNav = () => {
	// useEffect(async () => {
	// 	try {
	// 		const res = await axios.get('/api/v1/artworks', {
	// 			params: { 'pr	// useEffect(async () => {
	// 	try {
	// 		const res = await axios.get('/api/v1/artworks', {
	// 			params: { 'price[gte]': 44000, 'price[lte]': 50000 },
	// 		});
	// 		console.log(res.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, []);ice[gte]': 44000, 'price[lte]': 50000 },
	// 		});
	// 		console.log(res.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, []);

	const [edition, setEdition] = useState([]);
	const [category, setCategory] = useState([]);

	const handleFilter = (type, checked) => {
		switch (type) {
			case 'Limited':
			case 'Original':
				checked
					? setEdition(edition.concat(type))
					: setEdition(edition.filter((item) => item !== type));
				break;
			case 'Contemporary':
			case 'Painting':
			case 'Post-war':
			case 'Impressionist':
			case 'Photograph':
			case 'Abstract':
				checked
					? setCategory(category.concat(type))
					: setCategory(category.filter((item) => item !== type));
				break;
			default:
				break;
		}
	};

	console.log(edition);
	console.log(category);

	return (
		<main className='ArtworksNav'>
			<section className='ArtworksNav__section'>
				<h4 className='ArtworksNav__header'>Editions</h4>
				<div className='ArtworksNav__btns'>
					<CheckBox handleFilter={handleFilter}>Limited</CheckBox>
					<CheckBox handleFilter={handleFilter}>Original</CheckBox>
				</div>
			</section>

			<section className='ArtworksNav__section'>
				<h4 className='ArtworksNav__header'>Categories</h4>
				<div className='ArtworksNav__btns'>
					<CheckBox handleFilter={handleFilter}>Contemporary</CheckBox>
					<CheckBox handleFilter={handleFilter}>Painting</CheckBox>
					<CheckBox handleFilter={handleFilter}>Post-war</CheckBox>
					<CheckBox handleFilter={handleFilter}>Impressionist</CheckBox>
					<CheckBox handleFilter={handleFilter}>Photography</CheckBox>
					<CheckBox handleFilter={handleFilter}>Abstract</CheckBox>
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

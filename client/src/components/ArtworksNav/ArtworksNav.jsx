import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './ArtworksNav.scss';

import CheckBox from './../CheckBox/CheckBox';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const ArtworksNav = ({ handleFetch }) => {
	const [edition, setEdition] = useState([]);
	const [category, setCategory] = useState([]);
	const [price, setPrice] = useState([1000, 60000]);

	useEffect(() => {
		fetchArtworksWithFilter();
	}, [edition, category, price]);

	const fetchArtworksWithFilter = () => {
		const filterObj = {};
		if (edition.length > 0) filterObj.edition = edition.join(',');
		if (category.length > 0) filterObj.category = category.join(',');
		filterObj['price[gte]'] = price[0];
		filterObj['price[lte]'] = price[1];
		handleFetch(filterObj);
	};

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
			case 'Photography':
			case 'Abstract':
				checked
					? setCategory(category.concat(type))
					: setCategory(category.filter((item) => item !== type));
				break;
			default:
				break;
		}
	};

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
						defaultValue={price}
						min={1000}
						max={60000}
						step={1000}
						onAfterChange={(value) => setPrice(value)}
					/>
				</div>
			</section>
		</main>
	);
};

export default ArtworksNav;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Artworks.scss';

// components
import ArtworksNav from './../../components/ArtworksNav/ArtworksNav';
import ArtworkBig from './../../components/ArtworkBig/ArtworkBig';

// redux
import { getAllArtworks } from './../../redux/actions/artwork';

const Artworks = ({ location, artworks, getAllArtworks }) => {
	useEffect(() => {
		console.log(location.state.edition);
		getAllArtworks();
	}, [getAllArtworks]);

	const configureArtworks = () =>
		artworks.map((artwork) => <ArtworkBig key={artwork.id} {...artwork} />);

	const handleFetch = (filterObj) => {
		getAllArtworks(filterObj);
	};

	return (
		<main className='Artworks'>
			<nav className='Artworks__nav'>
				<ArtworksNav handleFetch={handleFetch} />
			</nav>
			<div className='Artworks__container'>{configureArtworks()}</div>
		</main>
	);
};

const mapStateToProps = (state) => ({
	artworks: state.artwork.artworks,
});

const mapDispatchToProps = (dispatch) => ({
	getAllArtworks: (filterObj) => dispatch(getAllArtworks(filterObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);

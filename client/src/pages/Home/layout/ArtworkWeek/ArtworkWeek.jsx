import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './ArtworkWeek.scss';

import ArtworkBig from './../../../../components/ArtworkBig/ArtworkBig';
import CustomLink from './../../../../components/CustomLink/CustomLink';

import { getWeeklyArtworks } from './../../../../redux/actions/artwork';

const ArtworkWeek = ({ artworkWeek, getWeeklyArtworks }) => {
	useEffect(() => {
		getWeeklyArtworks();
	}, [getWeeklyArtworks]);

	return (
		<div className='ArtworkWeek'>
			<h2 className='ArtworkWeek-title'>ARTWORKS OF THE WEEK</h2>
			<div className='ArtworkWeek-content'>
				{artworkWeek.map((artwork) => (
					<ArtworkBig key={artwork.id} {...artwork} />
				))}
			</div>
			<div className='ArtworkWeek-link'>
				<CustomLink>SHOP ALL ARTWORKS</CustomLink>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({ artworkWeek: state.artwork.artworkWeek });

const mapdispatchToProps = (dispatch) => ({
	getWeeklyArtworks: () => dispatch(getWeeklyArtworks()),
});

export default connect(mapStateToProps, mapdispatchToProps)(ArtworkWeek);

import React from 'react'
import './CollectionPreview.scss'

import CustomButton from './../../../../components/CustomButton/CustomButton'
import CustomLink from './../../../../components/CustomLink/CustomLink'
import ArtworkSmall from './../../../../components/ArtworkSmall/ArtworkSmall'

const CollectionPreview = () => {
  return (
    <div className="CollectionPreview">
      <div className="CollectionPreview-header">
        <h3 className="CollectionPreview-title">BEST SELLERS</h3>
        <div className="CollectionPreview-buttons">
          <CustomButton
            backgroundColor="#AB9B8A"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
          >
            LIMITED EDITIONS
          </CustomButton>
          <CustomButton
            backgroundColor="black"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
          >
            ORIGINAL ARTWORKS
          </CustomButton>
        </div>
      </div>
      <div className="CollectionPreview-artworks">
        <ArtworkSmall
          name="Apollo"
          artist="Shivam Kaushik"
          image="http://www.fosterwhite.com/dynamic/images/display/Casey_McGlynn_Small_Herd_1_823199433_375.jpg"
          price="1000"
        >
          <CustomButton
            backgroundColor={`rgb(171, 155, 138)`}
            padding="5px 20px"
            fontSize="1rem"
            // handleClick={handleDelete(artwork.id)}
          >
            SHOW NOW
          </CustomButton>
        </ArtworkSmall>
        <ArtworkSmall
          name="Apollo"
          artist="Shivam Kaushik"
          image="http://www.fosterwhite.com/dynamic/images/display/Casey_McGlynn_Ships_on_the_Horizon_823198311_375.jpg"
          price="1000"
        >
          <CustomButton
            backgroundColor={`rgb(171, 155, 138)`}
            padding="5px 20px"
            fontSize="1rem"
            // handleClick={handleDelete(artwork.id)}
          >
            SHOW NOW
          </CustomButton>
        </ArtworkSmall>
        <ArtworkSmall
          name="Apollo"
          artist="Shivam Kaushik"
          image="http://www.fosterwhite.com/dynamic/images/display/Casey_McGlynn_From_the_Beginning_and_to_the_End_of_Tim_823198308_375.jpg"
          price="1000"
        >
          <CustomButton
            backgroundColor={`rgb(171, 155, 138)`}
            padding="5px 20px"
            fontSize="1rem"
            // handleClick={handleDelete(artwork.id)}
          >
            SHOW NOW
          </CustomButton>
        </ArtworkSmall>
        <ArtworkSmall
          name="Apollo"
          artist="Shivam Kaushik"
          image="http://www.fosterwhite.com/dynamic/images/display/Alden_Mason_Spirit_Bird_Landscape_13882_375.jpg"
          price="1000"
        >
          <CustomButton
            backgroundColor={`rgb(171, 155, 138)`}
            padding="5px 20px"
            fontSize="1rem"
            // handleClick={handleDelete(artwork.id)}
          >
            SHOW NOW
          </CustomButton>
        </ArtworkSmall>
      </div>
      <div className="ArtworkWeek-link">
        <CustomLink>BROWSE ALL BEST-SELLERS IN ORIGINAL EDITIONS</CustomLink>
      </div>
    </div>
  )
}

export default CollectionPreview

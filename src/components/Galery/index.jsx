import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from "./Image"
import React, { useState } from 'react';

const GaleryContainer = styled.section`
    display: flex;
    
`
const FluidSection= styled.section`
    flex-grow: 1;
`

const ContainerImage = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`



const Galery = ({ pictures = [], handleFavoriteSelect, onSelectPic }) => {
    return (   
        <>
            <Tags />
            <GaleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ContainerImage>        
                        {pictures.map( picture => 
                        <Image
                            key={picture.id}
                            picture={picture} 
                            onFavoriteSelect={handleFavoriteSelect}
                            onZoomSelect={onSelectPic} 
                             />
                        )}
                    </ContainerImage>
                </FluidSection>
                <Popular />
            </GaleryContainer>
        </>
    )
}

export default Galery
import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"


const GaleryContainer = styled.section`
    display: flex;
    
`
const FluidSection= styled.section`
    flex-grow: 1;
`

const Galery = ({ pictures = [] }) => {
    return (
        <>
            <Tags />
            <GaleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ul>        
                        {pictures.map( picture => <li>{picture.title}</li> )}
                    </ul>
                </FluidSection>
                <Popular />
            </GaleryContainer>
        </>
    )
}

export default Galery
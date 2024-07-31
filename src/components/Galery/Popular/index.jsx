import { styled } from "styled-components"
import Title from "../../Title"

import pictures from './popularPictures.json'

const ColumnPictures = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px;
`
const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
    
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #c98cf1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    margin: 13px;

`;

const Popular = () => {
    return (
        <section>
            <Title $alignment='center'>Populares</Title>
            <ColumnPictures>
                {pictures.map(picture => <Image key={picture.id} src={picture.path} alt={picture.alt}/>)}
            </ColumnPictures>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Popular
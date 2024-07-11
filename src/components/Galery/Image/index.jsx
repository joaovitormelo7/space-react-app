import { styled } from "styled-components"
import IconButton from "../../IconButton"
import { useState } from "react";


const Figure = styled.figure`
    width: ${props => props.$expand ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3{
            font-family: 'GandhiSansBold';
        }
        h4{
            flex-grow: 1;
        }
        h3, h4{
            margin: 0;
            font-size: 16px;
        }
    }

`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FavoriteIcon = styled.img`
    width: 24px; 
    height: 24px; 
`;



const Image =({ picture, expand = false, onFavoriteSelect }) => {
    const [isFavorite, setIsFavorite] = useState(picture.favorite);

    const handleFavoriteSelect = () => {
        setIsFavorite(!isFavorite);
        onFavoriteSelect(picture);
    };

    const favoriteIcon = picture.favorite ? 'public/image/icon/favorite-ativo.png' : 'public/image/icon/favorite-inativo.png';
    
    return (<Figure $expand={expand} id={`picture-${picture.id}`}>
        <img src={picture.path} alt={picture.alt} />
        <figcaption>
            <h3>{picture.title}</h3>
            <Footer>
                <h4>{picture.font}</h4>
                <IconButton onClick={handleFavoriteSelect}>
                    <FavoriteIcon src={favoriteIcon} alt="Favorite icon"/>
                </IconButton>
                <IconButton>
                    <img src="public/image/icon/expand.png" alt="Expand image icon"/>
                </IconButton>
            </Footer>
        </figcaption>
    </Figure>)
}

export default Image
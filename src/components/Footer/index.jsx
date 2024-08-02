import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const ContainerIcon = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        display: inline-block;
        margin-right: 32px;
    }
`;

const TextFooter = styled.p`
    display: flex;
    font-size: 16px;
    color: white;
    margin: 0;
    align-items: center;
`;

const ImageIcon = styled.img`
    width: 40px;
    display: flex;
    align-items: center;
    

`

function Footer() {
    return (
        <StyledFooter>
            <ContainerIcon>
                <li>
                    <a href='https://github.com/joaovitormelo7'>
                        <ImageIcon src='/image/icon/Octicons-mark-github.svg' alt='GitHub'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/joaovitormelo7/'>
                        <ImageIcon src='/image/icon/linkedin.svg' alt='LinkedIn'/>
                    </a>
                </li>
            </ContainerIcon>
            <TextFooter>Desenvolvido por Alura.</TextFooter>
        </StyledFooter>
    );
}

export default Footer
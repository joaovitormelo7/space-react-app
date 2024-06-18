import styled from "styled-components";
import NavigationItem from "./NavigationItem";


const StylizedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const SideBar = () => {
    return(
        <aside>
            <nav>
                <StylizedList>
                    <NavigationItem 
                        activeIcon="image/icon/home-ativo.png" 
                        inactiveIcon="image/icon/home-inativo.png"
                        active={true}
                        >
                            Início
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="image/icon/mais-vistas-ativo.png" 
                        inactiveIcon="image/icon/mais-vistas-inativo.png"
                        >
                            Mais vistas
                    </NavigationItem>
                </StylizedList>
            </nav>
        </aside>

    )
}


export default SideBar;

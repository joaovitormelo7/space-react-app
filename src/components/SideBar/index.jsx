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
                    <NavigationItem 
                        activeIcon="image/icon/mais-curtidas-ativo.png" 
                        inactiveIcon="image/icon/mais-curtidas-inativo.png"
                        >
                            Mais curtidas
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="image/icon/novas-ativo.png" 
                        inactiveIcon="image/icon/novas-inativo.png"
                        >
                            Novas
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="image/icon/surpreenda-me-ativo.png" 
                        inactiveIcon="image/icon/surpreenda-me-inativo.png"
                        >
                            Surpreenda-me
                    </NavigationItem>
                </StylizedList>
            </nav>
        </aside>

    )
}


export default SideBar;

import styled from "styled-components";

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
                    <li>
                        <a href="">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais vistas
                        </a>
                    </li>
                </StylizedList>
            </nav>
        </aside>

    )
}


export default SideBar;

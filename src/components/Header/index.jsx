import styled from "styled-components"
import FieldPage from "../TextField"

const HeaderStylized = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`    

const PageHeader = () => {
    return (<HeaderStylized>
        <img src="/image/logo.png" alt="logo-page0" />
        <FieldPage />
    </HeaderStylized>)
}

export default PageHeader;
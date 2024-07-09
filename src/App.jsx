import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import PageHeader from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/backgroundImage.png"
import Galery from "./components/Galery";
import pictures from './pictures.json';
import { useState } from "react";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`



const App = () => {
  const [galeryPics, setGaleryPics] = useState(pictures)
  return (
    <GradientBackground>
        <GlobalStyles />
          <AppContainer>
            <PageHeader />
              <MainContainer>
                <SideBar />
                  <GaleryContent>
                        <Banner
                            text="A galeria de fotos mais completa do universo!"
                            backgroundImage={bannerBackground}
                        />
                    <Galery pictures={galeryPics}/>
                  </GaleryContent>
              </MainContainer>
          </AppContainer>
    </GradientBackground>
  );
}

export default App;

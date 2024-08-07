import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import PageHeader from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/backgroundImage.png"
import Galery from "./components/Galery";
import pictures from './pictures.json';
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";



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
  const [selectPic, setSelectPic] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  const [pictureZoom, setPicZoom] = useState (null)

  useEffect(() => {
    const selectFilterPic = pictures.filter(picture =>{
      const tagFilter = !tag || picture.tagId === tag;
      const titleFilter = !filter || picture.title.toLowerCase().includes (filter.toLowerCase())
      return tagFilter && titleFilter

    })
    setGaleryPics(selectFilterPic)

  }, [filter, tag])

  const onAlternateFav = (picture) => {
    if(picture.id === selectPic?.id){
      setSelectPic({
        ...selectPic,
        favorite: !selectPic.favorite
      })
    }
    setGaleryPics(galeryPics.map(galeryPic => {
      return {
        ...galeryPic,
        favorite:  galeryPic.id === picture.id ? !picture.favorite : galeryPic.favorite
      }
    }))
  }

  return (
    <GradientBackground>
        <GlobalStyles />
          <AppContainer>
            <PageHeader
              filter={filter}
              setFilter={setFilter}
            />
              <MainContainer>
                <SideBar />
                  <GaleryContent>
                        <Banner
                            text="A galeria de fotos mais completa do universo!"
                            backgroundImage={bannerBackground}
                        />
                        <Galery
                            onSelectPic={picture => setSelectPic(picture)}
                            onAlternateFav={onAlternateFav}
                            pictures={galeryPics}
                            setTag={setTag}
                    />
                  </GaleryContent>
              </MainContainer>
          </AppContainer>
          {selectPic && <ModalZoom 
            picture={selectPic}
            onClose={() => setSelectPic(null)}
            onAlternateFav={onAlternateFav}          
          />}
          <Footer />
    </GradientBackground>
  )
}

export default App;

import "@/App.css";
import { Footer, Navbar } from "@/components/sections";
import { BeautyTitle, Container } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { PrimaryPage, WhoWeArePage, HowToReceivePage, HowToDonatePage, Modals, Drawers } from "@/pages";

// pendente - FIGMA, Criar prototipo mobile

function App() {
  return (
    <>
      <Navbar />

      <Container
        background={colors.primary_color_violet_A73AA7}
        ismobile="false"
      >
        <PrimaryPage />
      </Container>
      <Container background={colors.white_FFFFFF} height="auto">
        <WhoWeArePage />
      </Container>
      <Container
        background={colors.third_color_violet_blue_6F66BA}
        height="auto"
      >
        <HowToDonatePage />
      </Container>
      <Container
        background={colors.five_color_violet_pink_BC6BFA}
        height="auto"
      >
        <HowToReceivePage />
      </Container>
      <Container background={colors.white_FFFFFF} height="25vh">
        <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      </Container>
      <Container background={colors.six_color_orange_C18151} height="25vh">
        <BeautyTitle FrontTitle="Depoimentos" BackTitle="FALE!" Color="White" />
      </Container>
      <Footer />
      <Modals />
      <Drawers />
    </>
  );
}

export default App;

import "@/App.css";
import { Footer, Navbar } from "@/components/sections";
import { BeautyTitle, Container } from "@/components/shareds";
import { colors } from "@/styles/colors";
import {
  PrimaryPage,
  WhoWeArePage,
  HowToReceivePage,
  HowToDonatePage,
  Modals,
  Drawers,
  DepositionsPage,
} from "@/pages";

// pendente - FIGMA, Criar prototipo mobile - criar tela principal para mobile

// pendente - TELA DE INICIO MOBILE (CAPA COM O NOME DO SITE E UMA IMAGEM EM SVG)

// pendente - ADICIONAR BASICO DE ACESSIBILIDADE (ohar no chat gpt)
//legacy.reactjs.org/docs/accessibility.html
//www.npmjs.com/package/react-axe
// react-axe é uma ferramenta de análise de acessibilidade que pode ser usada com o React. Ele fornece relatórios detalhados sobre problemas de acessibilidade em seu aplicativo.

// pendente - ADICIONAR APOIADORES
// pendente - MODAL QUANDO ESTA NO MOBILE NÃO DESCE

function App() {
  return (
    <>
      <Navbar />

      <Container
        background={colors.primary_color_violet_A73AA7}
        ismobile="false"
        height="100vh"
      >
        <PrimaryPage />
      </Container>
      <Container
        id="WhoWeArePage"
        background={colors.white_FFFFFF}
        height="auto"
      >
        <WhoWeArePage />
      </Container>
      <Container
        id="HowToDonatePage"
        background={colors.third_color_violet_blue_6F66BA}
        height="auto"
      >
        <HowToDonatePage />
      </Container>
      <Container
        id="HowToReceivePage"
        background={colors.five_color_violet_pink_BC6BFA}
        height="auto"
        paddingBottom="none !important"
      >
        <HowToReceivePage />
      </Container>

      <Container id="Apoiadores" background={colors.white_FFFFFF} height="25vh">
        <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
      </Container>

      <Container
        id="DepositionsPage"
        background={colors.six_color_orange_C18151}
        height="auto"
      >
        <DepositionsPage />
      </Container>

      <Footer />
      <Modals />
      <Drawers />
    </>
  );
}

export default App;

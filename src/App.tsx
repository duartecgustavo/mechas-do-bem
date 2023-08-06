import "@/App.css";
import { Footer, Navbar } from "@/components/sections";
import { Container } from "@/components/shareds";
import { colors } from "@/styles/colors";
import PrimaryPage from "@/pages/PrimaryPage";

// pendente - Criar Readme maneiro
// pendente - FIGMA, Criar prototipo mobile

function App() {
  return (
    <>
      <Navbar />
      {/* pendente - Retirar essa sessão quando for mobile  */}
      <Container background={colors.primary_color_violet_A73AA7}>
        <PrimaryPage />
      </Container>
      <Container background="red" height="10vh">
        <div className="col-10">QUEM SOMOS</div>
      </Container>
      <Container background="green" height="10vh">
        <div className="col-10">COMO DOAR</div>
      </Container>
      <Container background="blue" height="10vh">
        <div className="col-10">COMO RECEBER</div>
      </Container>
      <Container background="violet" height="10vh">
        <div className="col-10">APOIADORES</div>
      </Container>
      <Container background="orange" height="10vh">
        <div className="col-10">DEPOIMENTOS</div>
      </Container>
      {/* pendente - Criar componente - page - que englobe o footer  */}
      <Footer />
    </>
  );
}

export default App;

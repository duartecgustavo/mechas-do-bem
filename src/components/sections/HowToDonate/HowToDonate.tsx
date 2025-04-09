import { BeautyTitle } from "@/components/shareds";
import StepDonate from "./StepDonate";

const HowToDonate = () => {
  return (
    <>
      <div className="row justify-content-center">
        <BeautyTitle FrontTitle="Como doar?" BackTitle="DOE" Color="White" />
        <div className="row justify-content-center col-10 col-xxl-8 gap-2">
          <StepDonate
            number={1}
            text="Aceitamos qualquer tipo de cabelo, de qualquer cor, incluindo grisalhos. Pode ter química, ser liso ou cacheado!"
          />
          <StepDonate
            number={2}
            text="O cabelo deve ter, NO MÍNIMO, 20cm de comprimento, medido a partir da base do elástico."
          />
          <StepDonate
            number={3}
            text="Informe ao cabeleireiro que o corte é para doação. O cabelo deve ser preso com um elástico bem firme. O corte deve ser feito com o cabelo SECO. Evite enviar o cabelo molhado, pois isso pode prejudicar o material e não poderemos utilizar."
          />
          <StepDonate
            number={4}
            text="Se desejar, tire uma foto segurando o cabelo cortado e compartilhe em suas REDES SOCIAIS utilizando as hashtags: #mechasdobem #doeseucabelo #cabelocresce #doarfazbem #gratidao #perucasdobem #perucasdeamor"
          />
          <StepDonate
            number={5}
            text="Coloque o cabelo cortado, amarrado com o elástico, em um saco plástico ou embalagem apropriada, e depois coloque em uma caixa ou envelope para envio."
          />
          <StepDonate
            number={6}
            text="Agora é só enviar para nosso novo endereço: Caixa Postal 34567 - CEP: 04532-300 - Vila Progredior - São Paulo - SP ou entregar pessoalmente nos endereços informados no passo 8. Não se preocupe, fazemos retiradas semanais nas agências dos correios para garantir que todas as doações sejam recebidas!"
          />
          <StepDonate
            number={7}
            text="Está quase lá! Agora, basta preencher o cadastro, incluindo o código de rastreamento do correio, para que possamos confirmar o recebimento da sua doação. Lembre-se: temos até 60 dias para processar as doações e enviar o e-mail de confirmação!"
          />
        </div>
      </div>
    </>
  );
};

export default HowToDonate;

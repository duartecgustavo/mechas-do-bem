import { BeautyTitle } from "@/components/shareds";
import {
  LogoClaroSC,
  LogoCosanSC,
  LogoDrAgoraSC,
  LogoMsdSC,
  LogoNaturaSC,
  LogoSeconSC,
} from "./styles";

const Supporters = () => {
  return (
    <>
      <div className="container">
        <BeautyTitle FrontTitle="Apoiadores" BackTitle="AJUDE" Color="Violet" />
        <div className="row justify-content-center gap-2 mb-5">
          <LogoClaroSC className="col-2 col-md-3" />
          <LogoCosanSC className="col-2 col-md-3" />
          <LogoDrAgoraSC className="col-2 col-md-3" />
          <LogoMsdSC className="col-2 col-md-3" />
          <LogoNaturaSC className="col-2 col-md-3" />
          <LogoSeconSC className="col-2 col-md-3" />
        </div>
      </div>
    </>
  );
};

export default Supporters;

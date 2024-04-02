import { HeaderContainer } from "./styles";
import effectLeftImg from "../../assets/effect-left.svg";
import effectRightImg from "../../assets/effect-right.svg";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeftImg} alt="" className="effect" />
      <img src={logoImg} alt="" className="logo" />
      <img src={effectRightImg} alt="" className="effect" />
    </HeaderContainer>
  );
}

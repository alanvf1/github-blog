import { HeaderContainer } from "./styles";
import effectLeftImg from "../../assets/effect-left.svg";
import effectRightImg from "../../assets/effect-right.svg";
import logoImg from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeftImg} alt="" className="effect effect-left" />
      <NavLink to="/">
        <img src={logoImg} alt="" className="logo" />
      </NavLink>
      <img src={effectRightImg} alt="" className="effect effect-right" />
    </HeaderContainer>
  );
}

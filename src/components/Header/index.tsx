import { HeaderContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <a className="localization">
          <MapPin size={22} weight="fill" />
          Fortaleza, Ce
        </a>

        <a className="cart" href="">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
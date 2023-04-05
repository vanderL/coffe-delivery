import { Timer, Coffee, ShoppingCart, Package } from 'phosphor-react';
import mainCoffe from '../assets/mainCoffee.png';
import { HomeContainer, ListIcon } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>

        <ul>
          <li>
            <ListIcon variable='cart'>
              <ShoppingCart size={16} weight="fill" />
            </ListIcon>
            Compra simples e segura
          </li>
          <li>
            <ListIcon variable='package'>
              <Package size={16} weight="fill" />
            </ListIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <ListIcon variable='timer'>
              <Timer size={16} weight="fill" />
            </ListIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <ListIcon variable='coffee'>
              <Coffee size={16} weight="fill" />
            </ListIcon>
            O café chega fresquinho até você
          </li>
        </ul>
      </div>

      <img src={mainCoffe} alt="" />
    </HomeContainer>
  )
}
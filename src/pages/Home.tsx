import { Timer, Coffee, ShoppingCart, Package } from 'phosphor-react';
import mainCoffe from '../assets/mainCoffee.png';
import { CoffeesContainer, HomeContainer, ListIcon } from './styles';
import { CardCoffee } from '../components/CardCoffee';

export function Home() {
  return (
    <>
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

      <CoffeesContainer>
        <h1 className="coffee-container__title">Nossos Cafés</h1>
        <div className="coffee-container__wrapper">
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
        </div>
      </CoffeesContainer>
    </>
  )
}
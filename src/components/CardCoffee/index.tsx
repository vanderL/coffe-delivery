import { CardContainer } from "./styles";
import coffee from '../../assets/coffee1.png';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

const tags = ['especial', 'alcoólico', 'gelado'];

export function CardCoffee() {
  return (
    <CardContainer>
      <img src={coffee} alt="" />

      <div className="tags">
        {tags.map(tag => {
          return (
            <span>{tag}</span>
          )
        })}
      </div>

      <h1>Cubano</h1>

      <span className="description">Drink gelado de café expresso com rum, creme de leite e hortelã</span>

      <div className="price">
        <span>R$ <strong>9,90</strong></span>

        <div className="wrapper">
          <div className="units">
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <input type="number" name="" id="" defaultValue={1} min={0} max={99} />
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <span><ShoppingCart size={18} weight="fill" /></span>
        </div>
      </div>

    </CardContainer>
  )
}
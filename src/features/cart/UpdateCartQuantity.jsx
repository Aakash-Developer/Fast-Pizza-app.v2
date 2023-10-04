import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQty, increaseItemQty } from './cartSlice';

export default function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  console.log(pizzaId);
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium ga"> {currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

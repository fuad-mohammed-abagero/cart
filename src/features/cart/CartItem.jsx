import { useContext } from "react";
import { CartContext, deleteItemFromCart } from "../../ContextProvider";

function CartItem({ cartItem }) {
  const { dispatch } = useContext(CartContext);
  const { name, price, quantity } = cartItem;
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex flex-col text-sm ">
        <span className="p-1">{name}</span>
        <div className="flex gap-3 mt-1 text-xs">
          <span className="font-semibold text-red-500">{quantity}x</span>
          <span className="text-stone-500">@ ${price}</span>
          <span className=" text-stone-900">${quantity * price}</span>
        </div>
      </div>
      <button
        className="p-1 border rounded-full h-fit"
        onClick={() => dispatch(deleteItemFromCart(name))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;

import { useContext } from "react";
import {
  addCart,
  CartContext,
  decQuantityCart,
  incQuantityCart,
} from "../../ContextProvider";
function AddToCartButton({ menu }) {
  const { state, dispatch } = useContext(CartContext);

  function handleAddToCart() {
    const newCart = {
      name: menu.name,
      price: Number(menu.price),
      quantity: 1,
    };

    dispatch(addCart(newCart));
  }
  const cart = state.cart.find((item) => item.name === menu.name);

  const quantity = cart?.quantity || 0;
  if (quantity > 0)
    return (
      <div className="absolute text-nowrap  w-32 text-white py-2 bottom-0  border-2 bg-red-900 rounded-full left-1/2 border-rose-50 transform translate-x-[-50%] translate-y-[50%]  ">
        <div className="flex items-center justify-evenly h-fit">
          <button
            className="px-1 py-2 border rounded-full "
            onClick={() => dispatch(decQuantityCart(menu.name))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>
          <span>{quantity}</span>
          <button
            className="p-1 border rounded-full h-fit"
            onClick={() => dispatch(incQuantityCart(menu.name))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  return (
    <button
      className="absolute text-nowrap px-4 py-2 text-sm  bottom-0 flex border-2 border-red-900 rounded-full left-1/2 bg-rose-50 transform translate-x-[-50%] translate-y-[50%]  "
      onClick={handleAddToCart}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <g fill="#C73B0F" clipPath="url(#a)">
          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.333 0h20v20h-20z" />
          </clipPath>
        </defs>
      </svg>
      add to cart
    </button>
  );
}

export default AddToCartButton;

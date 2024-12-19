import AddToCartButton from "./AddToCartButton";

function MenuItem({ menu }) {
  const { image, name, category, price } = menu;
  return (
    <div className="flex flex-col w-60">
      <div className="relative">
        <img className="object-fill rounded-md" src={image} alt={name} />
        <AddToCartButton menu={menu} />
      </div>
      <span className="mt-8 text-sm text-gray-600">{category}</span>
      <span className="text-black">{name}</span>
      <span className="font-semibold text-red-900">${price}</span>
    </div>
  );
}

export default MenuItem;

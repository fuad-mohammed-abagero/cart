function ConfirmModalItem({ item }) {
  return (
    <div className="flex justify-between mt-2 border-b border-stone-400/50">
      <div className="flex flex-col justify-center">
        <div>{item.name}</div>
        <div className="flex gap-4 mb-4">
          <span className="font-semibold text-red-500">{item.quantity}x</span>
          <span className="text-stone-500">@ ${item.price}</span>
        </div>
      </div>
      <div className="flex items-center text-stone-900">
        ${item.quantity * item.price}
      </div>
    </div>
  );
}

export default ConfirmModalItem;

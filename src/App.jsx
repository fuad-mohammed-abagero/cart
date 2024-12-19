import ContextProvider from "./ContextProvider";
import Cart from "./features/cart/cart";
import ConfirmModal from "./features/cart/ConfirmModal";
import Menu from "./features/menu/menu";

function App() {
  return (
    <ContextProvider>
      <div className="flex mx-auto xm:flex-row  flex-col    xl:max-w-[1200px] font-red-hat-text lg:p-4 justify-center">
        <Menu />
        <Cart />
        <ConfirmModal />
      </div>
    </ContextProvider>
  );
}

export default App;

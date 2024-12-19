import { useEffect } from "react";
import menu from "../../data.json";
import MenuItem from "./MenuItem";
import { useState } from "react";

function Menu() {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(function () {
    function getDeviceType() {
      const width = window.innerWidth;
      if (width <= 480) return "mobile";
      if (width <= 768) return "tablet";
      return "desktop";
    }
    function handleResize() {
      setScreenType(getDeviceType());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updatedMenu = menu.map((menu) => {
    return { ...menu, image: menu.image[screenType] };
  });

  return (
    <div className="flex flex-col flex-grow mx-auto max-w-fit">
      <h1 className="m-4 text-4xl font-bold text-lef ">Disserts</h1>
      <div className="grid self-center justify-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {updatedMenu.map((menuItem) => (
          <MenuItem key={menuItem.name} menu={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

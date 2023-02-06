import { useState } from "react";

import { MenuComponent } from "./Components/menu-component";
import { TitleComponent } from "./Components/title-component";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");

  const clickHandler = (e) => {
    setCategory(e.currentTarget.dataset.id);
  };
  return (
    <div className="App">
      <div className="container">
        <TitleComponent clickHandler={clickHandler} />
        <MenuComponent category={category} />
      </div>
    </div>
  );
}

export default App;

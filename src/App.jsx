import { useState } from "react";
import Filters from "./components/Filters";
import ImageFile from "./components/ImageFile";
import "./App.css";
function App() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <div>
        <div>
          <h1>Filter</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 50%" }}>
            <ImageFile filterVal={filter} />
          </div>
          <div style={{ flex: "0 0 50%" }}>
            <Filters currentValue={filter} setFilter={setFilter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

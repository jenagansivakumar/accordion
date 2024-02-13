import { useState } from "react";
import "./App.css";
import data from "./components/accordion/data";

function App() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentID) {
    console.log(getCurrentID);
    setSelected(getCurrentID);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> no data found!</div>
        )}
      </div>
    </div>
  );
}

export default App;

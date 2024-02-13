import { useState } from "react";
import "./App.css";
import data from "./components/accordion/data";
import "./components/accordion/styles.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMutliSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMutiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    console.log(getCurrentID);
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  function handleMultiSelection(getCurrentID) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentID);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentID);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMutiple(cpyMultiple);
  }

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <h1> 28 Facts About Black Holes</h1>
      <button onClick={() => setEnableMultiSelection(!enableMutliSelection)}>
        {" "}
        Enable Multi-Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMutliSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
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

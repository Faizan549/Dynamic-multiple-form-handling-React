import React, { useState } from "react";
import "./App.css";
function App() {
  let [err, setErr] = useState(false);
  let [data, setData] = useState([
    {
      id: "",
      name: "",
      description: "",
      quantity: "",
    },
  ]);

  function submitButton() {
    setData([
      ...data,
      {
        id: "",
        name: "",
        description: "",
        quantity: "",
      },
    ]);
  }

  function deleteButton(index) {
    let data1 = [...data];
    data1 = data1.filter((element, ind) => {
      return index !== ind;
    });
    setData(data1);
  }

  function Handler(e, index) {
    let data2 = [...data];
    data2[index][e.target.name] = e.target.value;
    setData(data2);
  }

  function addData() {
    if (
      data.some((item) => {
        return (
          item.name === "" || item.description === "" || item.quantity === ""
        );
      })
    ) {
      setErr(true);
    } else {
      console.log(data);
      setErr(false);
    }
  }

  return (
    <div className="container">
      <h1>DYNAMIC MULTIPLE FORM HANDLING USING REACT JS</h1>
      <div className="buttons-container">
        <button onClick={submitButton}>Add Field</button>
        <button onClick={addData}>Add Data</button>
      </div>

      {data.map((element, index) => {
        return (
          <div>
            <label>Name:</label>
            <input
              style={{
                border:
                  err && element.name === ""
                    ? "2px solid red"
                    : "1px solid #000",
              }}
              name="name"
              type="text"
              value={element.name}
              onChange={(e) => Handler(e, index)}
            />
            <label>Description:</label>
            <input
              style={{
                border:
                  err && element.description === ""
                    ? "2px solid red"
                    : "1px solid #000",
              }}
              name="description"
              type="text"
              value={element.description}
              onChange={(e) => Handler(e, index)}
            />
            <label>Quantity:</label>
            <input
              style={{
                border:
                  err && element.quantity === ""
                    ? "2px solid red"
                    : "1px solid #000",
              }}
              name="quantity"
              type="number"
              value={element.quantity}
              onChange={(e) => Handler(e, index)}
            />
            <button onClick={() => deleteButton(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

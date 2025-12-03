import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);
  function handleAddInput() {
    const nextId = inputs[inputs.length - 1].id;
    setInputs(
      //   inputs.concat({
      //     id: nextId,
      //     label: "input",
      //   })
      [
        ...inputs,
        {
          id: nextId,
          label: "input",
        },
      ]
    );
  }
  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "5px" }}>
          <input type="text" label={input.label} />
        </div>
      ))}
      <div style={{ marginTop: "20px" }} onClick={handleAddInput}>
        <button>Add Input</button>
      </div>
    </div>
  );
}

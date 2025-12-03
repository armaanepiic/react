import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  // visual states: empty, typing, submitting, success, error

  // mandatory states
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };
  function handleClickAgain () {
    setStatus("typing");
    setAnswer("");
  }

  if (status === "success") return (
    <>
      <h1>That's right!</h1>
      <button onClick={handleClickAgain}>Again</button>
    </>
  );
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>

        {status === "submitting" && <p>Loading...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </>
  );
}

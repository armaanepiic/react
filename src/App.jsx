export default function App() {
  function handleYes() {
    console.log("Yes Clicked");
  }
  return (
    <div>
      <button onClick={handleYes}>yes</button>
      <button onClick={() => {
        console.log("No Clicked");
      }}>no</button>
    </div>
  );
}

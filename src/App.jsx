export default function App() {
  return (
    <div
      onClick={() => {
        alert("Clicked the parents div!");
      }}
    >
      <button
        onClick={() => {
          alert("Playing movie");
        }}
      >
        Play movie
      </button>
      <button
        onClick={() => {
          alert("Image uploadig");
        }}
      >
        Upload Image
      </button>
    </div>
  );
}

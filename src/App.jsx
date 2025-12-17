function AlertButton({ message, children }) {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <>
      <AlertButton message={"playing"}>Play movie</AlertButton>
      <AlertButton message={"Uploading"}>Upload image</AlertButton>
    </>
  );
}

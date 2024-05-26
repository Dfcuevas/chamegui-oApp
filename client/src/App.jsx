import useStore from "./store";

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <h1 className="">Welcome to Chameguiño</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;

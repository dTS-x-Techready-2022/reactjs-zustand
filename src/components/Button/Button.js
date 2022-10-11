import { useStore } from "../store";

export const Button = () => {
  const { inc, incByAmount } = useStore((state) => state);
  return (
    <>
      <button onClick={inc}>INCREMENT + 1</button>
      <button onClick={() => incByAmount(10)}>
        INCREMENT + 10
      </button>
    </>
  );
};

import { useStore } from "../store";

export const Display = () => {
  const count = useStore((state) => state.count);

  return <p>{count}</p>;
};

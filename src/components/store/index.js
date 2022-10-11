import create from "zustand";

export const useStore = create((set) => {
  return {
    count: 0,
    inc: () =>
      set((state) => ({
        count: state.count + 1,
      })),
    incByAmount: (payload) =>
      set((state) => ({
        count: state.count + payload,
      })),
  };
});

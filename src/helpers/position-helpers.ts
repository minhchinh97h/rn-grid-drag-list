export const getItemOriginPosition = (
  width: number,
  height: number,
  columns: number,
  index: number,
) => {
  return {
    x: (index % columns) * width,
    y: Math.floor(index / columns) * height,
  };
};

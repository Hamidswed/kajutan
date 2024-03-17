import { ThreeDots } from "react-loader-spinner";

export function Loading({ width = "75", height = "40", color = "#926b48" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color={color}
      wrapperClass={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

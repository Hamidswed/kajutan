import { ThreeDots } from "react-loader-spinner";

export function Loading({ width = "75", height = "40" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="#926b48"
      wrapperClass={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

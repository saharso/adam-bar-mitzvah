import { PropsWithChildren } from "react";

export default function TextWithImage(
  props: PropsWithChildren<{ imgUrl?: string | string[]; width?: number }>
) {
  const { children, imgUrl, width = 30 } = props;
  return (
    <div className={"align-top gap-1"}>
      <div className={"fs-title stretch"}>{children}</div>
      <div className={"flex-column gap-1"} style={{ width: `${width}vw` }}>
        {Array.isArray(imgUrl) ? (
          imgUrl.map((e) => <Img imgUrl={e} />)
        ) : (
          <Img imgUrl={imgUrl as string} />
        )}
      </div>
    </div>
  );
}

function Img({ imgUrl }: { imgUrl: string }) {
  return <img src={imgUrl} style={{ width: `100%` }} />;
}

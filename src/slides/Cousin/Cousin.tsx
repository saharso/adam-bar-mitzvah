import TextWithImage from "../../parts/TextWithImage/TextWithImage";
import Gallery from "../../parts/Gallery/Gallery";
import Youtube from "../../parts/Youtube/Youtube";
import introImage from "./assets/20150502_180758.jpeg";
import { images } from "../../images/index";

const cousinImages = images.filter((e) => e.category === "with_family");

export function SlideCousins1() {
  return (
    <TextWithImage imgUrl={introImage}>
      עם הזמן, נוספו למשפחה בני דודים חדשים
    </TextWithImage>
  );
}

const images1 = cousinImages.map((e) => e.url);

export function SlideCousins2() {
  return <Gallery images={images1} columns={4} />;
}

export function SlideCousins3() {
  return <Youtube videoId={"754HfOXgYfE"} />;
}

export function SlideCousinsEden() {
  return <Youtube videoId={"Xum0lmwTwcw"} />;
}

export function SlideCousinsAriel() {
  return <Youtube videoId={"WR7MLP9htiI"} />;
}

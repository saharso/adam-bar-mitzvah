import TextWithImage from "../../parts/TextWithImage/TextWithImage";
import Gallery from "../../parts/Gallery/Gallery";
import Youtube from "../../parts/Youtube/Youtube";
import { images } from "../../images/index";
import intro from "./assets/a.jpg";
import intro1 from "./assets/aa.jpg";
import intro2 from "./assets/b.jpg";

const sibImages = images.filter((e) => e.category === "with_brothers");

export function SlideSiblings1() {
  return (
    <TextWithImage imgUrl={intro}>
      מאז שאדם היה קטן
      <br />
      הוא נהג לבקש ממני עוד אח או אחות
    </TextWithImage>
  );
}

export function SlideSiblings2() {
  return (
    <TextWithImage imgUrl={intro1}>
      כשהיה בן 8
      <br />
      מילאתי את בקשתו בפעם הראשונה.
    </TextWithImage>
  );
}

export function SlideSiblings3() {
  return (
    <TextWithImage imgUrl={intro2}>
      ושנה וחצי אחר-כך,
      <br />
      בפעם השניה.
    </TextWithImage>
  );
}

const images1 = sibImages.slice(0, sibImages.length / 2).map((e) => e.url);

const images2 = sibImages
  .slice(sibImages.length / 2, sibImages.length)
  .map((e) => e.url);

export function SlideSiblings4() {
  return <Gallery images={images1} columns={5} />;
}

export function SlideSiblings5() {
  return <Gallery images={images2} columns={5} />;
}

export function SlideSiblings6() {
  return <Youtube videoId={"FZlw3V8rUXQ"} />;
}

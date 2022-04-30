import adam_and_stav from "./assets/IMG_20170407_113609_HDR.jpeg";
import adam_and_stav_2 from "./assets/IMG_20160627_173127.jpeg";
import Gallery from "../../parts/Gallery/Gallery";
import TextWithImage from "../../parts/TextWithImage/TextWithImage";
import { images } from "../../images/index";

const bestFriendsImages = images.filter((img) => {
  return img.category === "with_stav";
});

export function SlideBestFriends1() {
  return (
    <TextWithImage imgUrl={adam_and_stav}>
      אדם היה הנכד הראשון ונהנה ממלוא תשומת הלב.
      <br />
      אבל כשהיה בן שנה וחצי, הצטרף למשפחה יצור חדש ולא מוכר
    </TextWithImage>
  );
}

export function SlideBestFriends2() {
  return (
    <TextWithImage
      imgUrl={[
        adam_and_stav_2,
        "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/278852881_10228338724476971_7709895181954814745_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=R1KCq7UB9W4AX-srpVO&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_X6W3GUpaePBl7LfLp3YUJu_Va3krVjftevj2dDGyQKw&oe=626909D8",
      ]}
      width={24}
    >
      אחרי תקופת הסתגלות
      <br />
      אדם גילה שהיצור החדש הזה הוא דווקא די סבבה
    </TextWithImage>
  );
}

const images1 = bestFriendsImages
  .slice(0, bestFriendsImages.length / 2)
  .map((e) => e.url);

export function SlideBestFriends3() {
  return <Gallery images={images1} />;
}

const images2 = bestFriendsImages
  .slice(bestFriendsImages.length / 2, bestFriendsImages.length)
  .map((e) => e.url);

export function SlideBestFriends4() {
  return <Gallery images={images2} columns={4} />;
}

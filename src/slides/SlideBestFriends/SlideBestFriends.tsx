import adam_and_stav from './assets/IMG_20170407_113609_HDR.jpeg';
import adam_and_stav_2 from './assets/IMG_20160627_173127.jpeg';
export function SlideBestFriends1(){
    return <div className={"align-xy gap-1"}>
        <div className={"fs-title-medium stretch"}>
            אדם היה הנכד הראשון ונהנה ממלוא תשומת הלב.
            <br/>
אבל כשהיה בן שנה וחצי, הצטרף למשפחה יצור חדש ולא מוכר
        </div>

        <img src={adam_and_stav} style={{width: "30%"}}/>
    </div>
}

export function SlideBestFriends2(){
    return <div className={"align-xy gap-1"}>
        <div className={"fs-title-medium stretch"}>
          אחרי תקופת הסתגלות
            <br/>
אדם גילה שהיצור החדש הזה הוא דווקא די סבבה
        </div>

        <img src={adam_and_stav_2} style={{width: "30%"}}/>
    </div>
}

export function SlideBestFriends3(){
    return <div className={"align-xy gap-1"}>
        <div className={"fs-title-medium stretch"}>

        </div>

        <img src={adam_and_stav_2} style={{width: "30%"}}/>
    </div>
}
import Masonry from "@mui/lab/Masonry";
import adamBaby from './assets/adam_baby.jpeg';

export function Slide1Birth(){
    return <div className={"h-full align-y gap-2 template-main-sidebar"}>
        <img src={adamBaby}/>
        <div className={"heb"}>
            <div className={"fs-main-title fw-bold"}>
                בתאריך
                <br/>
                <b>
            8.5.2009
                </b>
                <br/>
                ילד חדש בא לעולם
            </div>
        </div>
    </div>
}

export function Slide2Birth(){
    return <div className={"h-full align-y gap-2 template-main-sidebar"}>
        <img src={"https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/321716_2832288770092_1843012676_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2c4854&_nc_ohc=eM2HCGWNC7IAX_WK5a_&_nc_oc=AQleQ0bmsiLqhVrV4YHbDwFqKqc4nhtmiHUcstkmnMnNS-bIkwjxHuWtp0FYl08fFzY&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-j4cAS402HipiocFQPr05KO1n1mBmg2DofXyoZtaOc-Q&oe=627950B0"}/>
        <div className={"heb"}>
            <div className={"fs-main-title fw-bold"}>
                מאז שהיית תינוק ועד היום,
                <br/>
                נשארת אותו ילד חכם, מצחיק ורגיש
            </div>
        </div>
    </div>
}
const images1 = [
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/484179_10150985222619441_477881152_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=nKS4GBcBWc8AX_LcQox&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_hGuGwaCAkoQarUb5GVIfNPmhWaFOIuysrS7ZMnnrrmw&oe=6276F73D",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/223983_10150985222774441_1105123690_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=AlcKglXOskEAX98VpbM&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT93Pr9BXnTv2JMyUB06hYtZ0kAVJ-kq4b-9wT6fd2YVgg&oe=6277CD88",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/184102_10150115684384441_780063_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=w3FP2YQNoBwAX84pUcR&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT9neB9Ku1T59Bj1rSkZuKoNJ_DMM184tDdSQyApCztb3Q&oe=6279EE23",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/429511_10151529061319441_566827982_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=182UvTt5Xc0AX9UEKsD&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT9366oI8iMPSZp5a891w8mAlGYlju3CbVACgZp-xFmKHg&oe=6278A021",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/246804_10150228982034441_3760884_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=vYeTaW9UdbUAX_PihXy&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-rvUrXWpxuN1Jjfdvtl-6cXaE_7yIkd7rOTmXs7thkGQ&oe=62771CC5",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1545088_10152134587364441_2279419_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=VWe8meqWrIkAX8YhzMN&_nc_oc=AQmbDE4KtN_Gr93Ybp-F1fhTLyTkyG1TiqWu1kPhwUrgY5V4lhHaJthn7pswSopM0os&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-K-U-y2V2CXcEFjZrF3TDTx-1wDi8RLL4zpn_8CABcNg&oe=6278B6AC",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1454863_10152296216749441_1742273331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7RfMJRB8ubgAX8kPM3W&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT9osnCBcNLiiPXe5TXWXH87ub9kamCH3gr3WXObPCqBtg&oe=627931EE",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/10387544_10152829546312673_1202767110560826_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=wU2r9gWb9ygAX-oxFkO&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-POFletuMYFV7spNCFSEYtXVKc5h6HahFtALJIaVhhqQ&oe=6278FCA5",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1422516_10202844368974017_433071605_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=_2vKqucFsssAX9f8DTi&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT93sXGKFNcntfhFh5bjYRIrzSYawmV9RzUlvpXqWc-iWQ&oe=627896C5",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1450874_10202622481386966_2128030340_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=nVaRMcWACF8AX8Db8C3&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-f0ALU1Wj734ndmEcF4M05Bst0yw0MkJcGz3pSHC_yiQ&oe=627827D7",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/578490_10202190582389761_1333952322_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=qgqwNUkwAFkAX9VeDJ8&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_l0h3RlGYxYpnE_TfobmzcqMPBaG8OwwjxF1ldX7uxbQ&oe=62774688",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1001819_10201765945334100_327514083_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=rLzwYOcPJXMAX971f77&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_aNFbeOHXfbpg2cpjVgfdCHNh0DgmTTqYZT9JFrIygoQ&oe=6276D72A",
]
export function Slide3Birth(){
    return <div className={"h-full"}>
        <Masonry columns={"5"}>
            {images1.map((url)=><img key={url} src={url}/>)}
        </Masonry>
    </div>
}
const images2 = [
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1001023_10201765943934065_1703317890_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7Ye1FDGBrMEAX-zQISB&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-Lbua1o2mKaI9cnbQ_MUnA3ZJk_Mnw-YvvJIAUHvl45w&oe=627775E9",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/1074876_10201714711453285_1420027704_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=2c4854&_nc_ohc=JpS5nXj83ykAX9Sp0lr&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_NdNWHg8jumd_723ii416QNRaWTiMKy1ptOEhWggL_7A&oe=62792210",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/971492_10201660979150011_1409054343_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=sOABMJKi89sAX-9lYR4&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_3VFlNYxsYBUguPf3v7VbjDH3L1nNXZnpWHVykQJ4qUA&oe=6276A12B",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/943207_10201575193725429_596794945_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=7ccOmdS4E_YAX8h0ouE&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_HKFs5J-8fVe9pSorpQf10Pf2Fr-9X_oekxmRXjvO14g&oe=6279FFDC",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/1002948_10201569315778484_1431539069_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a9b1d2&_nc_ohc=59B9XbDgDEEAX8t0-NF&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-lQ0P59rjbjYcCGvjCOo8OiJ9Xy2m7GDkav9-TIE5L_g&oe=627A2C26",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/798299_10200729480383124_365999777_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=UvduQ-dMYdsAX_o_a0C&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-zbt0LgegCKSLDe4I8cgWY8oGo5YvwIDs2-5UybU5dBg&oe=62793EC7",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/535549_3810018652728_794012471_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=BA_Ktmvb6n0AX9UT0PA&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT9rgQl62kVYxeTcRRXU8Qk3qnxKr0ansaJmFdR91ZYShQ&oe=62781556",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.18169-9/542779_3721808007517_1946347924_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=2MXhZk-7SkoAX_dzkrA&tn=83uZ4njYR1l-MtaE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT8KuE9vlIN2GWhCcMHtrE8D07bqhsOKd1MkG3kbfcRWrw&oe=62770E39",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/457031_3582201397439_1928641051_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=19026a&_nc_ohc=4OlpEH2bS4YAX_CnAp5&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT_Rp2eGcExk-_8FPQo34OZlPEOBL68ITEyw48uAWEJvaA&oe=627A0289",
    "https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.18172-8/321716_2832288770092_1843012676_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2c4854&_nc_ohc=eM2HCGWNC7IAX_WK5a_&_nc_oc=AQleQ0bmsiLqhVrV4YHbDwFqKqc4nhtmiHUcstkmnMnNS-bIkwjxHuWtp0FYl08fFzY&_nc_ht=scontent.ftlv1-1.fna&oh=00_AT-j4cAS402HipiocFQPr05KO1n1mBmg2DofXyoZtaOc-Q&oe=627950B0",

];

export function Slide4Birth(){
    return <div className={"h-full"}>
        <Masonry columns={"5"}>
            {images2.map((url)=><img key={url} src={url}/>)}
        </Masonry>
    </div>
}
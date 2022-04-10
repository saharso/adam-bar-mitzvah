import React, {useEffect, useRef, useState} from "react";
import Masonry from "@mui/lab/Masonry";
import {images} from "../../images";
import {Loader} from "../../App";

export default function BackGroundMasonry(){
    const bgRef = useRef<HTMLDivElement>(null);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        function recourseLoader(){
            const seconImage = bgRef.current?.querySelectorAll('img')[3];
            const secondImageTopPos = seconImage?.getBoundingClientRect().top;
            if(secondImageTopPos === 0){
                setTimeout(()=>{
                    setLoader(false);
                },50)
            } else {
                requestAnimationFrame(recourseLoader);
            }
        }
        recourseLoader();
    },[]);

    return <div ref={bgRef} className={"background"}>
        {loader && <Loader/>}
        <Masonry columns={11} spacing={1} >
            {images.map((image)=>{
                return <img src={image.url} key={image.url}/>
            })}
        </Masonry>
    </div>
}

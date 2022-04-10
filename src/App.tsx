import React, {PropsWithChildren, useCallback, useRef, useState} from 'react';
import './App.scss';
import Slider from "react-slick";
import Welcome from "./slides/Welcome/Welcome";
import BackGroundMasonry from "./parts/BackGroundMasonry/BackGroundMasonry";
import {Slide1Birth, Slide2Birth} from "./slides/Slide1Birth/Slide1Birth";
declare module 'react-slick'

function App() {

    const sliderRef = useRef<any>();
    const settings = {
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleNext = useCallback(()=>{
        sliderRef.current.slickNext();
    },[]);
    const handlePrev = useCallback(()=>{
        sliderRef.current.slickPrev();
    },[]);
    return (
    <div className="App">
        <MainPanel>
            <CategoryLabel/>
            {/* @ts-ignore */}
            <Slider {...settings} className={'slider'} ref={sliderRef}>
                <Slide>
                    <Welcome/>
                </Slide>
                <Slide>
                    <Slide1Birth/>
                </Slide>
                <Slide>
                    <Slide2Birth/>
                </Slide>
            </Slider>
            <footer>
                <button onClick={handleNext}>next</button>
                <button onClick={handlePrev}>prev</button>
            </footer>
        </MainPanel>
        <BackGroundMasonry/>
    </div>
  );
}

export function CategoryLabel(){
    return <div>TEST</div>
}

export function MainPanel({children}: PropsWithChildren<unknown>){
    return <div className={"panel"}>{children}</div>
}

export function Slide({children}: PropsWithChildren<unknown>){
    return <div className={"slide"}>{children}</div>
}
export function Loader(){
    return <div className={'loader'}>רגע...</div>
}

export default App;

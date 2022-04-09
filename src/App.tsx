import React from 'react';
import './App.scss';
import {images} from './images/index';
// import Masonry from '@mui/lab/Masonry';

function App() {
  console.log(images);
  return (
    <div className="App">
      {/*<Masonry columns={4} spacing={2}>*/}
      {images.map((image)=>{
        return <img src={image.url}/>
      })}
      {/*</Masonry>*/}

    </div>
  );
}

export default App;

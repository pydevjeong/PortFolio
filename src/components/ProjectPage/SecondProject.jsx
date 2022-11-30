import React from 'react';
import Header from '../Layout/Header/Header';

const SecondProject = () => {
  const title="Js Card-Game"
  return (
    <>
      <Header title={title}/>
      <div className="container">
        <div className="img_container">
          <img className="project_img" src="imgs/cardGame.PNG" alt="" />
        </div>
        <div className="project_explaination">
          <div className="project_video">
            <video
              className="react-player"
              src="videos/jsCardGame.mp4"
              autoPlay={false}
              muted={true}
              controls={true}
              loop={false}
            />
          </div>
          <p>JS/HTML/CSS만 사용해서 만든 간단한 카드게임</p>
        </div>
      </div>
    </>
  );
};

export default SecondProject;
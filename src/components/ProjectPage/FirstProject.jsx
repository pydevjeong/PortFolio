import React from "react";
import "./ProjectCommon.css";
import ReactPlayer from "react-player";
import Header from "../Layout/Header/Header";

const FirstProject = () => {
  const title="Gym_maniac"
  return (
    <>
      <Header title={title}/>
      <div className="container">
        <div className="img_container">
          <img className="project_img" src="imgs/projectFirst.PNG" alt="" />
        </div>
        <div className="project_explaination">
          <div className="project_video">
            <video
              className="react-player"
              src="videos/gym_maniac.mp4"
              autoPlay={false}
              muted={true}
              controls={true}
              loop={false}
            />
          </div>
          <p>간단한 리액트 퀴즈앱</p>
          <p>사용한기술들, 기간, 깃허브</p>
        </div>
      </div>
    </>
  );
};

export default FirstProject;

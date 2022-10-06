import React from "react";
import "./ProjectCommon.css";
import ReactPlayer from "react-player";
import Header from "../Layout/Header/Header";

const FirstProject = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Gym Maniac</h1>
        <div className="img_container">
          <img className="project_img" src="imgs/projectFirst.PNG" alt="" />
        </div>
        <div className="project_explaination">
          <p>설명글</p>
          <p>사용한기술들, 기간, 깃허브</p>
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
        </div>
      </div>
    </>
  );
};

export default FirstProject;

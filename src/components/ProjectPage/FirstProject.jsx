import React from "react";
import "./ProjectCommon.css";
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
          <span>간단한 리액트 퀴즈앱</span>
          <span>사용한기술들, 기간, 깃허브</span>
          <span>-“react-router-dom”→ Using React-Router v6.4.2에 익숙해짐</span>
          <span>- Link로 props를 넘기는 방법을 배움</span>
          <span>- userLocation을 사용해서 props를 가져올 수 있음</span>
          <span>- map을 사용해서 jsx에 효과적으로 데이터를 뿌려줄 수  있음</span>
          <span>- media screen을 이용한 css 작성 가능</span>
        </div>
      </div>
    </>
  );
};

export default FirstProject;

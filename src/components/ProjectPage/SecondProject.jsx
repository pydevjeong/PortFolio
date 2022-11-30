import React from 'react';
import Header from '../Layout/Header/Header';

const SecondProject = () => {
  const title="Js Card-Game"
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
          <p>-“react-router-dom”→ Using React-Router v6.4.2에 익숙해짐</p>
          <p>- Link로 props를 넘기는 방법을 배움</p>
          <p>- userLocation을 사용해서 props를 가져올 수 있음</p>
          <p>- map을 사용해서 jsx에 효과적으로 데이터를 뿌려줄 수  있음</p>
          <p>- media screen을 이용한 css 작성 가능</p>
        </div>
      </div>
    </>
  );
};

export default SecondProject;
import React from 'react';
import Header from '../Layout/Header/Header';
import "./ProjectCommon.css";

const ThirdProject = () => {
  const title="Team Project - Sports"
  return (
    <>
      <Header title={title}/>
      <div className="container">
        <div className="img_container">
          <img width={'90%'} height={'70%'} src="imgs/teamProject.jpeg" alt=""/>
        </div>
        <div className="project_explaination">
          <div className="project_video">
            <video
              className="react-player"
              src="videos/temp_vid.mp4"
              autoPlay={false}
              muted={true}
              controls={true}
              loop={false}
            />
          </div>
          <h2>간단한 기능들을 가진 정적 웹사이트</h2>
          <span>- 카카오 맵 API를 가져와서 특정 키워드 검색 시 지도에 마커로 되는 코드를 구현했습니다</span>
          <span>- MUI를 사용해서  Card,Modal을 제작했습니다</span>
          <span>- axios를 사용해서 POST,GET를 사용해 백엔드와 통신해서 로그인 및 게시판 기능을 구현하고 있습니다</span>
          <span>- module.css를 사용해서 css가 겹치지 않도록 만들었습니다.</span>
          <span>- Git을 이용해 Pull request를 받아서 Merge하면서 프론트 개발이 가능합니다</span>
          <span>- Router를 사용해 props를 넘기고 useLocation을 사용해 props를 받아 사용이 가능합니다.</span>
          <span>- Slick을 사용한 이미지 슬라이더 구현이 가능합니다</span>
          <span>- .env 파일로 api key가 노출되지 않도록 했습니다</span>
          <span>- 경기도 공공 체육시설 API를 가공해서 화면에 뿌려줄 수 있도록 코드를 만들었습니다.</span>
        </div>
      </div>
    </>
  );
};

export default ThirdProject;
import React from "react";
import FirstProject from "./FirstProject";
import SecondProject from './SecondProject';

// 레이아웃 구조를 프로젝트 사진을 크게 띄워서 화면에 갤러리식으로 -> 사진 확대 및 상세 팝업

const ProjectLayout = () => {
  return (
    <div>
      <div>
        <FirstProject />
      </div>
      {/* <div>
        <SecondProject />
      </div> */}
      {/*
      <div>
        <FirstProject />
      </div>
      <div>
        <FirstProject />
      </div> */}
    </div>
  );
};

export default ProjectLayout;

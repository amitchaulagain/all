import React from "react";
import BackgroundCover from "./BackgroundCover";
import Presentation from "./Presentation";
import Cover from "./Cover";
import Footer from "../fragments/footer/Footer";
import style from "../../../css/Footer.module.css";
import Header1 from "../fragments/header/Header1";

const HomeContent = () => {
  return (
    <>
      <main>
          <Header1></Header1>


          <Footer></Footer>
      </main>
      <Footer class={style.footer_cover} />
    </>
  );
};

export default HomeContent;

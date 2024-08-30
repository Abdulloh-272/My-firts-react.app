import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header1 } from "./components/header.page/Header1";
import { Section } from "./components/section.one/Section";

const App = () => {
  return (
    <>
      <Header1 />
      <Section />
    </>
  );
};

export default App;

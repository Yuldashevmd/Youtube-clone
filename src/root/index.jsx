import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { ContentBlog, Wrapper } from "./style";
import Content from "../components/content/index";

const Root = () => {
  return (
      <Wrapper>
        <Sidebar />
        <ContentBlog>
          <Header />
          <Content />
        </ContentBlog>
      </Wrapper>
  );
};

export default Root;

import React, { useContext } from "react";
import { Container, Descrip } from "./style";
import { g8Info } from "../../context";

const Content = () => {
  const  {dataItem } = useContext(g8Info);
  
  return (
    <Container>
      {dataItem.map((item) => (
        <Container.Content key={item.id}>
          <img src={item.urlImg} alt="content" />
          <Descrip>
            <img src={item.authorImg} alt="img" />
            <Descrip.Title>
              <p>{item.title}</p>
              <span>{item.author}</span>
              <span>{item.post}</span>
            </Descrip.Title>
          </Descrip>
        </Container.Content>
      ))}
    </Container>
  );
};

export default Content;

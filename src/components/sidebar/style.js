import styled from 'styled-components';

export const Bar = styled.div `
  width: 210px;
  height: 100vh;
  background: #212121;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background:transparent;
    border-radius: 8px;
}
  :hover{
    ::-webkit-scrollbar-thumb {
    background:grey;
    border-radius: 8px;
}
  ::-webkit-scrollbar{
    width: 8px;
  }
  }
  
`;
export const Logo = styled.div `
  padding: 0 20px;
  width: 100%;
  height: 44px;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
`;
export const List = styled.div `
width: 100%;
border-bottom: 1px solid rgba(99,99,99, 0.5);
padding: 10px  0;
.logIn{
  width:75%;
  height: 85px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #fff;
}
ul{
  display: flex;
  align-items: center;
  padding-left: 22px;
  :hover{
      cursor: pointer;
      background: grey;
    }
  li{
    padding: 8px 15px;
    color: #fff;
    font-size: 12px;
    transition: all 0.2s ease;
    letter-spacing: 0.5px;
  }
}
`;
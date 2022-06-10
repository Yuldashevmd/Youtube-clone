import styled from 'styled-components';


export const Wraper = styled.div `
width: 100%;
height: 90px;
background: #212121;
position: sticky;
top: 0;
z-index: 999;
`;
export const SearchInput = styled.div `
width: 100%;
height: 50%;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(99,99,99, 0.5);
.key{
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  border-top: 1px solid rgba(99,99,99, 0.5);
  border-bottom: 1px solid rgba(99,99,99, 0.5); 
  padding-right: 8px;
  cursor: pointer;
  transition: all .2s linear;
  :hover{
    fill:#fff
  }
}
input {
  width: 380px;
  height: 30px;
  background: #121212;
  color: grey;
  outline: none;
  border: 1px solid rgba(99,99,99, 0.5);
  border-right: none;
  padding: 0 5px;
  margin-left: auto;
}
`;
export const SearchBtn = styled.button `
width: 50px;
height: 30px;
background: #303030;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius:0 1px 1px 0 ;
cursor: pointer;
`;
export const Micro = styled.div `
width: 30px;
height: 30px;
border-radius: 50%;
background: #101010;
display: flex;
justify-content: center;
align-items: center;
margin-left: 8px;
cursor: pointer;
`;
export const RightMenu = styled.div `
width: 140px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: auto;
margin-right: 15px;
.dotsMenu{
  color: #b5b3b3;
  cursor: pointer;
}
`;
export const LogIn = styled.button `
width: 70px;
height: 30px;
display: flex;
align-items: center;
justify-content: space-evenly;
border: 1px solid skyblue;
background: transparent;
cursor: pointer;
p{
  color:skyblue;
}
`;
// Down-side
export const FilterBtns = styled.div `
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid rgba(99,99,99, 0.5);
`;
FilterBtns.Btn = styled.button `
margin: 0 5px;
padding: 4px 15px;
background: #414141;
color: #fff;
border: 0.5px solid grey;
border-radius: 20px;
font-size: 12px;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in-out;
:hover{
  background: #707070;
  color: #000;
}
`
import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 100%;
padding: 20px;
background: #101010;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 10px;
`;
Container.Content = styled.div `
width: 220px;
height: 240px;
display: flex;
flex-direction: column;
color:#fff;
transition: all 0.3s ease-in-out;
:hover{
  cursor: pointer;
  transform: scale(1.10);
  background: #212121;
  z-index: 9;
}
img{
  width: 100%;
  height: 50%;
  object-fit: cover;
  
}
`;
export const Descrip = styled.div `
width: 100%;
display: flex;
align-items: flex-start;
padding: 10px;
img{
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: yellowgreen;
  margin-right: 10px;
}
`;
Descrip.Title = styled.div `
width: 80%;
display: flex;
flex-direction: column;
color: #fff;
overflow: hidden;
p{
  font-size: 14px;
  margin-bottom: 4px;
}
span{
  font-size: 11px;
  font-weight: normal;
  color: grey;
}
`
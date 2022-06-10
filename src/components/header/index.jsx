import React, { useContext,useState } from "react";
import { FilterBtns, Micro, RightMenu, SearchBtn, SearchInput, Wraper,Parent, LogIn } from "./style";
import { ReactComponent as Keyboard } from "../../assets/keyboard-svgrepo-com.svg";
import { ReactComponent as SearchSvg } from "../../assets/search-svgrepo-com.svg";
import { ReactComponent as Microphone } from "../../assets/microphone-svgrepo-com.svg";
import { ReactComponent as Sort } from "../../assets/rigthMenu.svg";
import { ReactComponent as DotsMenu } from "../../assets/dots-y-svgrepo-com.svg";
import { ReactComponent as UserSvg } from "../../assets/user-svgrepo-com.svg";
import {g8Info} from "../../context";
import { data } from "../../mock-data";

const Header = () => {
  const {dataItem,setDataItem}=useContext(g8Info);
  const [title,setTitle]=useState()
  const g8Change =(e)=>{
    setTitle(e.target.value)
  }
  const onPress =(e)=>{
    if(e.key =='Enter'){
      const newData=data.filter(item=>(
        item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      ))
      setDataItem(newData)
    }
  }
  const onClick =(e)=>{
    const newData=data.filter(item=>(
      item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    ))
    setDataItem(newData)
  }
  return (
    <>
    <Wraper>
      <SearchInput>
        <input type="text" placeholder="Search" onKeyPress={onPress} onChange={g8Change}/>
        <Keyboard fill="#aaa9a9f9" width="25px" className="key" />
        <SearchBtn onClick={onClick}>
          <SearchSvg fill="#fff" width="15px" className="searchSvg" />
        </SearchBtn>
        <Micro>
          <Microphone fill="#fff" width="16px" />
        </Micro>
        <RightMenu>
          <Sort fill="#b5b3b3" width='12px' style={{cursor:'pointer'}}/>
          <DotsMenu  width='16px' className="dotsMenu"/>
          <LogIn>
          <UserSvg fill="skyblue" width='16px'/>
          <p>Login</p>
          </LogIn>
        </RightMenu>
      </SearchInput>
      <FilterBtns>
        <FilterBtns.Btn>All</FilterBtns.Btn>
        <FilterBtns.Btn>Music</FilterBtns.Btn>
        <FilterBtns.Btn>Jam</FilterBtns.Btn>
        <FilterBtns.Btn>Live</FilterBtns.Btn>
        <FilterBtns.Btn>Gameplay</FilterBtns.Btn>
        <FilterBtns.Btn>Rap</FilterBtns.Btn>
        <FilterBtns.Btn>Recent published</FilterBtns.Btn>
        <FilterBtns.Btn>Seen</FilterBtns.Btn>
      </FilterBtns>
    </Wraper>
    </>
  
  );
};

export default Header;

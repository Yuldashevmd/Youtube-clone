import React,{createContext,useState} from 'react';
import { data } from '../mock-data';

export const g8Info =createContext();

export const Context = ({children}) => {
  const [dataItem, setDataItem] = useState(data);
  
  return (
    <g8Info.Provider value={{dataItem,setDataItem}}>
      {children}
    </g8Info.Provider>
  );
};

export default Context;
const { useContext, useState, createContext } = require("react")

 export const  UserContext = createContext();
 
export default function Context({children}) {
    let [user,setUser] = useState([]);
    return <>
 < UserContext.Provider value={{user,setUser}}>
{children}
 </UserContext.Provider>
    </>
}
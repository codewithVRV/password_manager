import Manager from "./Components/Manager/Manager";
import ShowPassword from "./Components/showpassword/ShowPassword";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import InputContext from "./Components/contextApi/InputProvider";
// import Demo from "./Components/demo/Demo";
// import LoginProvider from "./Components/contextApi/LoginProvider";


function App() {

  const [searchTerm, setSearchTerm] = useState("")
  // const [user, setUser] = useState({})

  return (
    <>
      {/* <LoginProvider.Provider value={{user, setUser}}> */}
      <InputContext.Provider value={{searchTerm, setSearchTerm}}>
        <NavBar />
        <Manager />
        <ShowPassword />
      </InputContext.Provider>

        {/* <Demo /> */}
      {/* </LoginProvider.Provider> */}
    </>
  )
}

export default App;

import Manager from "./Components/Manager/Manager";
import ShowPassword from "./Components/showpassword/ShowPassword";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import InputContext from "./Components/contextApi/InputProvider";
import ModalBox from "./Components/Form Modal/Modal";
// import Modal from "./Components/Form Modal/Modal";



function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <InputContext.Provider value={{searchTerm, setSearchTerm}}>
        <NavBar />
        <Manager />
        <ShowPassword />
      </InputContext.Provider>

        {/* <ModalBox /> */}
    </>
  )
}

export default App;

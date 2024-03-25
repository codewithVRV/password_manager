import { useContext, useState } from "react";
import LoginProvider from "../contextApi/LoginProvider";

function Demo () {

    const [namedata, setName] = useState({name: "", pass: ""})
    const {setUser} = useContext(LoginProvider)

    console.log("nameData is", namedata)
    function handleForm (e) {
        const {name, value} = e.target;
        setName({...namedata, [name]: value})
    }

    function dataHandle(e) {
        console.log("onSubmit called")
        e.preventDefault()
        setUser(namedata)
    }

    return (
        <>
            <form action="" onSubmit={dataHandle}>
                <input type="text" name="name" value={namedata.name} onChange={handleForm} placeholder="Name" /> <br />
                <input type="password" name="pass" value={namedata.pass} onChange={handleForm} placeholder="Password" /> <br />
                <button>Submit</button>
            </form>
        </>
    )


}

export default Demo;
import { useState } from "react";

function Demo () {

    const [data, setData] = useState({email:"", password: ""})

    function handleFormSubmit(e) {
        e.preventDefault()
        const {name, value} = e.target;
        setData({...data, [name]:value})

        console.log("Data is inside", data)
    }

    function formDataHandled (e) {
        e.preventDefault()

        // console.log("Data is outside", data)
    }

    
    return (
        // <h1>Hello demo</h1>
        <div>
            <form action="" onSubmit={handleFormSubmit}>
                <div>
                    <input type="email" name="email" placeholder="email" value={data.email}  onChange={formDataHandled}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" value={data.password} onChange={formDataHandled}/>
                </div>
                <input type="submit"  className="bg-blue-500 w-64  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
                {/* <button>Submit</button> */}
            </form>
                {/* <input type="submit" onClick={formDataHandled} className="bg-blue-500 w-64  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" /> */}
        </div>
    )
}

export default Demo;
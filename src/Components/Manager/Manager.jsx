import { useContext, useEffect, useState } from "react";
import ShowPassword from "../showpassword/ShowPassword";
import toast from "react-hot-toast";
import InputContext from "../contextApi/InputProvider";
import ModalBox from "../Form Modal/Modal";



function Manager () {

    const [formData, setFormData] = useState({site:"", username: "", password: "", id: (new Date()).getTime()})

    const [allData, setAllData] = useState([])
    const [oneData, setOneData] = useState([])
    const [againRender, setAgainRender] = useState(false)
    const {searchTerm} = useContext(InputContext)




    
    

        function handleForm (e) {
            e.preventDefault()
            setAllData([...allData, formData])
            localStorage.setItem('allData', JSON.stringify([...allData, formData]));
            setFormData({
                site:"", 
                username: "", 
                password: "",
                id: (new Date()).getTime(),
            })
            toast.success("Added New Entry!")
            
        }
        useEffect(() => {
            const storedUsers = localStorage.getItem('allData');
            if (storedUsers) {
                setAllData(JSON.parse(storedUsers));
            }


        }, [againRender]);
         
        useEffect(() => {
            if(searchTerm) {
                let searchItemarray = allData.filter((item) => item.username.toLowerCase().includes(searchTerm.toLowerCase()))
                setOneData(searchItemarray)
            }
        }, [searchTerm])


    function deletePass (id) {
        let updateList = allData.filter((data) => data.id != id)
        setAllData(updateList)
        localStorage.setItem("allData", JSON.stringify([...updateList]))
        toast.success("Password Deleted!")
    }
    
    function updatedData (newData, newId){

        const updatedData = allData.map((data) => {
            if(data.id === newId){

                return {...data, site:newData.site, username:newData.username, password: newData.password, id:newId}
            }
            else{
                return data;
            }
        })
        setAllData(updatedData)
        localStorage.setItem("allData", JSON.stringify(updatedData))
    }
    function handleRender () {
        setOneData({site:"", username: "", password: "", id: ""})
        setAgainRender(true)
    }
    return (
        <>


            <div className="flex justify-center bg-red-400 p-4">
                <form action="" onSubmit={handleForm}>
                    <input type="text" name="site" value={formData.site}         onChange={(e) => setFormData({...formData, site: e.target.value})} placeholder="Enter Your site name here.." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 mb-3" />                  
                <div>
                    <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({...formData, username:e.target.value})} placeholder="Username here.." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 mb-3" />
                    <input type="text" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} placeholder="Password here.." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 mb-3"  />                   
                </div>
                <div className="flex justify-center">
                    <button  className="bg-green-700 hover:bg-green-800 w-64  mt-4  text-white font-bold py-2 px-4 rounded">
                        Add Password
                    </button>
                </div>
                </form>
            </div>


            

        <div className="relative overflow-x-auto">
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" className="px-6 py-3 text-xs sm:text-lg">
                            Site Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs sm:text-lg">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs sm:text-lg">
                            Password
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs sm:text-lg">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3 text-xs sm:text-lg">
                            Delete
                        </th>
                    </tr>
                </thead>

        {
            (oneData.length>0) ? 
            <tbody>

            {oneData  && oneData.map((item) => <ModalBox  
                                                key={item.id} 
                                                data={item}
                                                allListRender={() => handleRender()}
                                                />)}
            </tbody> : 
            <tbody>

            {allData && allData.map((item) => <ShowPassword  
                                                key={item.id} 
                                                data={item}
                                                delete={() => deletePass(item.id)}
                                                editData={(newdata) => updatedData(newdata, item.id)}
                                                />)}
        </tbody>
        }
            </table>
        </div>


        




        </>
    )
}

export default Manager;
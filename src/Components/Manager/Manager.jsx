import { useEffect, useState } from "react";
import ShowPassword from "../showpassword/ShowPassword";
import toast from "react-hot-toast";


function Manager () {

    const [formData, setFormData] = useState({site:"", username: "", password: "", id: (new Date()).getTime(),})
    const [allData, setAllData] = useState([])



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
    }, []);


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
    return (
        <>


            <div className="flex justify-center bg-red-400 p-4">
                <form action="" onSubmit={handleForm}>
                    <input type="text" name="site" value={formData.site}         onChange={(e) => setFormData({...formData, site: e.target.value})} placeholder="Enter Your site name here.." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 mb-3" />                  
                <div>
                    <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({...formData, username:e.target.value})} placeholder="username here.." className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                    <input type="text" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} placeholder="password here.." className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 ms-4"  />                   
                </div>
                <div className="flex justify-center">
                    <button  className="bg-blue-500 w-64  mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add Password
                    </button>
                </div>
                </form>
            </div>


            

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Site Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {allData && allData.map((item) => <ShowPassword  
                                                        key={item.id} 
                                                        data={item}
                                                        delete={() => deletePass(item.id)}
                                                        editData={(newdata) => updatedData(newdata, item.id)}
                    />)}
                </tbody>
            </table>
        </div>


        




        </>
    )
}

export default Manager;
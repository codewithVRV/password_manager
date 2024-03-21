import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";

import ShowPassword from "../showpassword/ShowPassword";

function Manager () {

    const [formData, setFormData] = useState({site:"", username: "", password: ""})
    const [allData, setAllData] = useState([])

    
    function handleForm (e) {
        e.preventDefault()
        setAllData([...allData, formData])
        localStorage.setItem('allData', JSON.stringify([...allData, formData]));
        // formData("")
        
    }
    useEffect(() => {
        const storedUsers = localStorage.getItem('allData');
        if (storedUsers) {
            setAllData(JSON.parse(storedUsers));
        }
    }, []);


    
    return (
        <>


            <div className="flex justify-center bg-red-400 p-4">
                <form action="">
                <input type="text" name="site" value={formData.site} onChange={(e) => setFormData({...formData, site:e.target.value})} placeholder="Enter Your site name here.." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 mb-3" />                  
                <div>
                <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({...formData, username:e.target.value})} placeholder="username here.." className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                <input type="text" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} placeholder="password here.." className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 ms-4"  />                    </div>
                </form>
            </div>
            <div className="flex justify-center">
                <button onClick={handleForm} className="bg-blue-500 w-64  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add Password
                </button>
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
                                                        key={item.username} data={item}
                                                        username={item.username}
                    />)}
                </tbody>
            </table>
        </div>


        




        </>
    )
}

export default Manager;
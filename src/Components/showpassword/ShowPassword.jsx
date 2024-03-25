import { useState } from "react";


function ShowPassword (props) {

    // console.log("props is", props)
    const [isEdit, setIsEdit] = useState(false)
    const [updatedData, setUpdatedData] = useState({site: "", username: "", password: ""})

    return (
        <>
            {props.data && <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                {
                (isEdit) ? <input type="text" name="site" value={updatedData.site} placeholder="new user-name..." 
                                onChange={(e) => setUpdatedData({...updatedData, site : e.target.value})}
                            className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"/>
                            : <p>{props.data.site}</p>
                }
                </td>
                <td className="px-6 py-4">
                {
                (isEdit) ? <input type="text" name="username" value={updatedData.username} placeholder="new user-name..." 
                                onChange={(e) => setUpdatedData({...updatedData, username : e.target.value})}
                                className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"/>
                            : <p>{props.data.username}</p>
                }
                </td>
                <td className="px-6 py-4">
                {
                (isEdit) ? <input type="text" name="password" value={updatedData.password} placeholder="new password..." 
                                onChange={(e) => setUpdatedData({...updatedData, password : e.target.value})}
                                className=" px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"/>
                            : <p>{props.data.password}</p>
                }
                </td>
                <td className="px-6 py-4">
                
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                            setIsEdit(!isEdit)
                            props.editData({...updatedData})
                        }}
                    >{(isEdit) ? "Save" : "Edit"}</button>
                    
                </td>
                <td className="px-6 py-4">
                    
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => {
                            props.delete()
                        }}
                    >Delete</button>
                </td>
            </tr>}
            
        </>
    )
}

export default ShowPassword;
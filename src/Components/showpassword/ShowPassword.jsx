

function ShowPassword ({username, keyNo}) {

    // console.log("prop is", username)
    // console.log("site", props.prop.site)
    // console.log("password", prop.prop.password)
    // console.log("username", prop.prop.username)

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {keyNo}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {username}
                </th>
                <td className="px-6 py-4">
                    {username}
                </td>
                <td className="px-6 py-4">
                    {username}
                </td>
                <td className="px-6 py-4">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                </td>
                <td className="px-6 py-4">
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
            
        </>
    )
}

export default ShowPassword;
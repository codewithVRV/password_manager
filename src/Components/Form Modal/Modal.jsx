import  { useState } from "react";

function ModalBox(props) {

    console.log("props is", props)
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        props.allListRender()
    };

    return (
        <>
            {isOpen && (
                <section className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div className="flex justify-center gap-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Your Credentials
                                </h1>
                                <button
                                    onClick={closeModal}
                                    type="button"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                </div>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Sitename
                                        </label>
                                        <input
                                            type="email"
                                            value={props.data.site}
                                            name="password"
                                            id="password"
                                            placeholder=""
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            value={props.data.username}
                                            name="password"
                                            id="password"
                                            placeholder=""
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Confirm password
                                        </label>
                                        <input
                                            type="text"
                                            value={props.data.password}
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default ModalBox;

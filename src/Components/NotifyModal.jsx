import React from 'react'
import userService from "../Service/userService";
function NotifyModal({ data, setNotifyModal, checkNotify }) {
    const NotifyRequestHandler = async (value, answer) => {
        let requestEnumData = value.requestEnum === "Takım İsteği" ? 1 : 2;
        const data = {
            "id": value.id,
            "sendUserId": value.sendUserId,
            "receiveUserId": value.receiveUserId,
            "requestEnum": requestEnumData,
            "requestResult": answer
        }
        await userService.notifyHandler(data);
        checkNotify();

    }
    return (
        <div className='absolute -left-36 top-14 p-2 w-72 '><div id="toast-notification" className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
            <div className="flex items-center mb-3">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Yeni Bildirim</span>
                <button type="button" onClick={() => setNotifyModal(false)} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </div>
            {data.length ?
                data.map((item, i) =>
                    <div key={i} className="flex items-center mt-2  justify-between">
                        <div className="text-sm font-normal">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.requestEnum}</div>
                            <div className="text-sm font-normal">{item.requestor.firstName} {item.requestor.lastName}</div>
                        </div>
                        <div className="relative inline-block shrink-0">
                            <button onClick={() => NotifyRequestHandler(item, 2)} type="button" className="text-blue-700 border mx-1 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="m9.414 8 5.293-5.293a1 1 0 1 0-1.414-1.414L8 6.586 2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8Z" />
                                </svg>
                                <span className="sr-only">Icon description</span>

                            </button>
                            <button onClick={() => NotifyRequestHandler(item, 1)} type="button" className="text-blue-700 border mx-1 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span className="sr-only">Icon description</span>

                            </button>
                        </div>
                    </div>)
                : <p className='text-sm text-gray-400'>Yeni bildirim yok.</p>}

        </div></div>
    )
}

export default NotifyModal
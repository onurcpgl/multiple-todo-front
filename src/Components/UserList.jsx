import React, { useEffect, useLayoutEffect, useState } from 'react'
import userService from "../Service/userService";
import { AiOutlineUserAdd } from "react-icons/ai";
import teamService from "../Service/teamService";
function UserList() {
    const [userList, setUserList] = useState([])
    const getAllUser = async () => {
        const result = await userService.getAllUser();
        if (result) {
            setUserList(result);
        }
    }

    useLayoutEffect(() => {
        getAllUser();
    }, [])
    const inviteUserHandler = async (id) => {
        const inviteJson = {
            receiveUserId: id,
            requestEnum: 1,
            requestResult: 0
        }
        const result = await teamService.userInvite(inviteJson)
        console.log(result);
    }
    return (
        <div className='w-96 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            {
                userList.map((item, i) =>
                    <div className='flex justify-between items-center shadow p-3 mt-2 hover:scale-105 duration-150 delay-100'>
                        <div className='flex justify-start items-center'>
                            <img src='https://picsum.photos/id/231/200/300' className='w-12 h-12 rounded object-cover' />
                            <p className='text-lg font-medium pl-2'>{item.firstName} {item.lastName}</p>
                        </div>
                        <AiOutlineUserAdd onClick={() => inviteUserHandler(item.id)} className='text-3xl font-medium hover:scale-110 duration-150 delay-100 cursor-pointer' />
                    </div>
                )
            }
        </div>
    )
}

export default UserList
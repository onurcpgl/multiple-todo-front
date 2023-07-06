import React, { useEffect, useLayoutEffect, useState } from 'react'
import teamService from "../Service/teamService";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useParams } from 'react-router-dom';

function UserList() {
    const [userList, setUserList] = useState([])
    const { slug } = useParams();
    const getAllUser = async () => {
        const result = await teamService.notTeamMember(slug);
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
        await teamService.userInvite(inviteJson)

    }
    return userList.length > 0 ? (
        <div className='w-96 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            {
                userList.map((item, i) =>
                    <div key={i} className='flex justify-between items-center shadow p-3 mt-2 hover:scale-105 duration-150 delay-100'>
                        <div className='flex justify-start items-center'>
                            <img src={item?.teamImage ? item?.teamImage : "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"} className='w-12 h-12 rounded object-cover' />
                            <p className='text-lg font-medium pl-2'>{item.firstName} {item.lastName}</p>
                        </div>
                        <AiOutlineUserAdd onClick={() => inviteUserHandler(item.id)} className='text-3xl font-medium hover:scale-110 duration-150 delay-100 cursor-pointer' />
                    </div>
                )
            }
        </div>
    ) : null
}

export default UserList
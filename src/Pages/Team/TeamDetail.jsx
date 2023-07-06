import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TeamMember from '../../Components/Team/TeamDetail/TeamMember';
import TeamTodo from '../../Components/Team/TeamDetail/TeamTodo';
import UserList from '../../Components/UserList';
import teamService from "../../Service/teamService";


function TeamDetail() {
    const [teamMembers, setTeamMembers] = useState();
    const [teamOwner, setTeamOwner] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    const { slug } = useParams();

    const teamMember = async () => {
        const result = await teamService.teamMember(slug);
        setTeamMembers(result)
    }
    const getTeamOwner = async () => {
        const owner = await teamService.teamOwner(slug);
        setTeamOwner(owner);
    }
    const isAdminHandler = async () => {
        const admin = await teamService.isAdmin(slug);
        setIsAdmin(admin);
    }
    useEffect(() => {
        isAdminHandler();
        teamMember();
        getTeamOwner();
    }, [])

    return (
        <div className='mt-5 flex gap-6'>
            <div className='w-3/4'>
                <div className='w-full flex justify-between'>
                    <p className='text-3xl font-bold opacity-60'>Takım görevleri:</p>
                    {isAdmin &&

                        <button
                            type='button'
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Görev Ekle
                        </button>
                    }
                </div>
                <TeamTodo />
            </div>
            <div className='w-1/4'>
                <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center px-4 pt-4 ">
                        <p className='text-xl font-bold my-4'>Takım Sahibi</p>
                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={teamOwner?.teamImage ? teamOwner?.teamImage : "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{teamOwner?.firstName} {teamOwner?.lastName}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{teamOwner?.mail}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>

                <TeamMember teamMembers={teamMembers} />
                <UserList />
            </div>
        </div>
    )
}

export default TeamDetail
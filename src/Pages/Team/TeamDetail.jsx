import React from 'react'
import { useParams } from 'react-router-dom'
import TeamMember from '../../Components/Team/TeamDetail/TeamMember';
import TeamTodo from '../../Components/Team/TeamDetail/TeamTodo';
import UserList from '../../Components/UserList';


function TeamDetail() {
    const { slug } = useParams();
    return (
        <div className='mt-5 flex gap-6'>
            <TeamTodo />
            <div>
                <TeamMember />
                <UserList />
            </div>
        </div>
    )
}

export default TeamDetail
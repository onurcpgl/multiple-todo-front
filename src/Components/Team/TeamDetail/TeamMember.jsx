import React from 'react'


function TeamMember({ teamMembers }) {
    return (
        <>
            <p className='text-2xl opacity-60 font-semibold'>Takım Üyeleri</p>
            <div className='w-96 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>

                {teamMembers?.length > 0 ?
                    teamMembers?.map((item, i) =>
                        <div key={i} className='flex justify-between items-center shadow p-3 mt-2 hover:scale-105 duration-150 delay-100'>
                            <div className='flex justify-start items-center'>
                                <img src={item?.teamImage ? item?.teamImage : "https://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"} className='w-12 h-12 rounded object-cover' alt='profile' />
                                <p className='text-lg font-medium pl-2'>{item.firstName} {item.lastName}</p>
                            </div>
                        </div>
                    ) : <p>Üye yok.</p>
                }
            </div>
        </>
    )
}

export default TeamMember
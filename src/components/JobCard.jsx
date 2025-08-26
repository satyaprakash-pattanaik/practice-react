import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className='bg-white p-4 shadow rounded-lg'>
        <h2 className='text-lg font-semibold'>{job.title}</h2>
        <p className='text-gray-600'>{job.company}</p>
        <p className='text-sm'>{job.type} | ${job.salary}</p>
        <div className='mt-2 flex flex-wrap gap-2'>
            {job.skills.map((skill,i) => (
                <span key={i} className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full'>{skill}</span>
            ))}
        </div>
    </div>
  );
}

export default JobCard
import React, { useEffect, useState } from 'react'
import JobCard from '../components/JobCard';

const Jobs = () => {
  
  const[jobs,setJobs]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError] =useState(null);

  const[selectedType,setSelectedType]=useState("all");
  const[sorted,setSorted]=useState(false);

  useEffect(() =>{
    fetch("https://mocki.io/v1/82cfbe3d-459a-408e-b7f7-8a27ce5330fd")
    .then((res) => {
        if(!res.ok) throw new Error("Failed to fetch jobs");
        return res.json();
    })
    .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
    })
    .catch((err) =>{
        setError(err.message);
        setLoading(false);
    });
  },[]);

  if(loading) return <p>Loading jobs...</p>
  if(error) return <p>Error : {error}</p>

  const filteredJobs= 
    selectedType==="all"
    ? jobs 
    : jobs.filter((j) => j.type.toLowerCase() === selectedType)

  const finalJobs = 
    sorted ? [...filteredJobs].sort((a,b) => a.title.localeCompare(b.title))
    : filteredJobs

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-2xl font-bold mb-6'>Available Jobs</h1>
        <div className='flex gap-4 mb-6 justify-between'>
            <select value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='p-2 border rounded'>
                <option value="all">All</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="internship">Internship</option>
            </select>
            <button onClick={()=> setSorted(!sorted)}
                className='px-3 py-2 bg-blue-500 text-white rounded'>
                    {sorted? "Unsort":"Sort by Title"}
                </button>
        </div>
        <div>
            {finalJobs.length === 0 ? (
                <p>NO Jobs Found</p>
            ):(
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {finalJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Jobs
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import ProfileCard from '../components/ProfileCard'

const Home = () => {
  const profiles = [
    {
      name: "Hedy Lamarr",
      image: "https://i.imgur.com/yXOvdOSs.jpg",
      tasks: [
        "Invent new traffic lights",
        "Rehearse a movie scene",
        "Improve the spectrum technology",
      ],
      role: "scientist"
    },
    {
      name: "Ada Lovelace",
      image: "https://i.imgur.com/MK3eW3As.jpg",
      tasks: ["Write the first algorithm", "Study analytical engine"],
      role: "mathematician"
    },
    {
      name: "Alan Turing",
      image: "https://i.imgur.com/oWZ1jRf.jpg",
      tasks: [],
      role: "scientist"
    },
  ];

  // State for showing full tasks or short tasks
  // const [showFull, setShowFull] = useState(false);

  // State for filtering (role-based)
  const [selectedRole, setSelectedRole] = useState("all");

  // State for sorting
  const [sorted, setSorted] = useState(false);

  // Helper: format tasks depending on showFull
  // const getTasks = (tasks) => {
  //   if (showFull) return tasks;
  //   return tasks.length > 2 ? tasks.slice(0, 2).concat("...") : tasks;
  // };

  // Filtering logic
  const filteredProfiles =
    selectedRole === "all"
      ? profiles
      : profiles.filter((p) => p.role === selectedRole);

  // Sorting logic
  const finalProfiles = sorted
    ? [...filteredProfiles].sort((a, b) => a.name.localeCompare(b.name))
    : filteredProfiles;

  return (
    <div className="p-4 m-2">
      <h1 className="text-3xl font-bold text-blue-500">Welcome to the Home Page</h1>
      <p>This is your landing content.</p>

      {/* <ProfileCard 
        name="Hedy Lamarr"
        image="https://i.imgur.com/yXOvdOSs.jpg"
        tasks={[
          "Invent new traffic lights",
          "Rehearse a movie scene",
          "Improve the spectrum technology"
        ]}/>
         <ProfileCard
        name="Satya Prakash"
        image="https://i.imgur.com/yXOvdOSs.jpg"
        tasks={[
          "Build a React app",
          "Learn Tailwind CSS",
          "Deploy to Vercel"
        ]}
      /> */}

      {/* Controls for Filter, Sort, ShowFull */}
      <div className="flex gap-4 my-4">
        <select
          value={selectedRole}
          onChange={(e) => {
            console.log("Full event object :", e);               
            console.log("Target element :", e.target);         
            console.log("Selected value :", e.target.value); 
            setSelectedRole(e.target.value)}} 
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="scientist">Scientist</option>
          <option value="mathematician">Mathematician</option>
        </select>

        <button
          onClick={() => setSorted(!sorted)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          {sorted ? "Unsort" : "Sort by Name"}
        </button>

        {/* <button
          onClick={() => setShowFull(!showFull)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          {showFull ? "Show Less" : "Show Full"}
        </button> */}
      </div>

      {/* Profile List */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
        {finalProfiles.length === 0 ? (
          <p>No profiles found</p>
        ) : (
          finalProfiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              tasks={profile.tasks}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home

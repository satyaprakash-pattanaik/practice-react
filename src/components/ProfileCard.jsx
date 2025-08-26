import React, { useState } from 'react'

const ProfileCard = ({ name, image, tasks }) => {
  const [likes, setLikes] = useState(0);
  const [showFull, setShowFull] = useState(false);  // Local state for show/hide tasks

  // Decide how many tasks to show
  const displayedTasks = showFull ? tasks : tasks.slice(0, 2);

  return (                                                                                                                  
    <div className="w-screen h-57 bg-gray-100 flex items-center justify-center py-2">
      {/* Card wrapper now full width & height */}
      <div className="w-full h-full bg-white shadow-lg border border-gray-200 flex">
        
        {/* Left: Image */}
        <div className="w-1/3 h-[24rem]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{name}</h2>

          {tasks.length > 0 ? (
            <>
              <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
                {displayedTasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>

              {/* Show toggle link only if tasks > 2 */}
              {tasks.length > 2 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="mt-3 text-blue-500 hover:underline text-sm self-start"
                >
                  {showFull ? "Show Less" : "Show More"}
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">No tasks available</p>
          )}
        </div> 

        {/* Likes section */}
        <div className="flex flex-col justify-center items-center p-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition"
            onClick={() => setLikes(likes + 1)}
          >
            Like
          </button>
          <p className="mt-2 text-lg font-semibold">{likes}</p>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard

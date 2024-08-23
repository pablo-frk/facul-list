import React from 'react';

const CollegeList = ({ students }) => {
  const colleges = [...new Set(students.map(student => student.college))];

  return (
    <div>
      {colleges.map((college) => (
        <div key={college} className="mb-4" text-black>
          <h2 className="text-xl font-semibold mb-1">{college}</h2>
          <ul className="list-decimal pl-5">
            {students
              .filter(student => student.college === college)
              .map((student, index) => (
                <li key={index} className="mb-1 text-black">{student.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;

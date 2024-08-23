"use client"
import AddStudentForm from './components/AddStudentForm';
import CollegeList from './components/CollegeList';
import { useState } from 'react'; // Importa useState


export default function Home() {

  const [students, setStudents] = useState([]);
  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
    
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-black">📜 Formulário</h1>
      <AddStudentForm onAdd={handleAddStudent} />
    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mt-8 text-black">
      <h1 className='text-2xl font-bold mb-5'>📋 Lista</h1>
      <CollegeList students={students} />
    </div>

  </main>
  );
}

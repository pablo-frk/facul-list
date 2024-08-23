"use client"
import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && college) {
      onAdd({ name, college });
      setName('');
      setCollege('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black">
      <label className="flex flex-col">
        <span className='text-1xl font-bold'>👨‍🎓 Nome:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="flex flex-col">
      <span className='text-1xl font-bold'>🏫 Faculdade:</span>

        <select
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="">Selecione</option>
          <option value="FSSS">FSSS</option>
          <option value="FATEC">FATEC</option>
          <option value="UNEB">UNEB</option>
          <option value="CETASS">CETASS</option>
          <option value="SENAI">SENAI</option>
          <option value="PITÁGORAS">PITÁGORAS</option>
          <option value="SANTO ANTÔNIO">SANTO ANTÔNIO</option>
          <option value="ESANY">ESANY</option>
          <option value="UNOPAR">UNOPAR</option>
          <option value="UNIGRANDE">UNIGRANDE</option>
          <option value="UNIASSELVI">UNIASSELVI</option>
          <option value="LIDER CURSOS">LIDER CURSOS</option>
          <option value="HAIR SCHOOL">HAIR SCHOOL</option>
          {/* Adicione mais opções de faculdades aqui */}
        </select>
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Adicionar
      </button>
    </form>
  );
};

export default AddStudentForm;

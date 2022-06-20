import React, { useState, useEffect } from "react";
import "./style.css";
import { Card } from "../../components/Card";

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = { 
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => { //Consumindo API 
    fetch('https://api.github.com/users/LaraCosta66')
      .then((response) => response.json())
      .then(data => {
        setUser({
          avatar: data.avatar_url, // vai trazer a imagem
          name: data.name, //vai trazer o nome do usuario
      });
    });

  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o seu nome:"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;

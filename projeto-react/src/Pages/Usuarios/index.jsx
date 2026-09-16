import React, { useEffect, useState } from 'react'
import "./usuarios.css"

export default function index() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
       fetch("http://localhost:3000/usuarios")
       .then((response) => response.json())
       .then((data) => setUsuarios(data))
       .catch((error) => console.log(error))
    }, [])

  return (
    <section className='container usuarios'>
        <h1>Lista de Usuários</h1>

        {usuarios.map((user) => (
            <article className='content-usuarios' key={user.id}>

            <strong>Nome: {user.nome}</strong>
            <br />

            <strong>Telefone: {user.telefone}</strong>
            <br />

            <strong>E-mail: {user.email}</strong>
            <br />

            <button className='delete'>Deletar</button>
            <hr />

        </article>
        ))}

    </section>
  )
}

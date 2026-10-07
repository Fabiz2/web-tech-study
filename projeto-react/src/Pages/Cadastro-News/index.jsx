import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './News.css'

const endpoint = 'http://localhost:3001/cadastroNews'

export default function CadastroNews() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [inscritos, setInscritos] = useState([])

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao carregar dados do servidor')
        }
        return response.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setInscritos(data)
        } else {
          setInscritos([])
        }
      })
      .catch(() => {
        setInscritos([])
        toast.error('Não foi possível carregar os inscritos.')
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Falha na inscrição')
        return response.json()
      })
      .then((inscrito) => {
        // Atualização segura do estado via função de callback
        setInscritos((prevInscritos) =>
          Array.isArray(prevInscritos) ? [...prevInscritos, inscrito] : [inscrito]
        )
        setNome('')
        setEmail('')
        toast.success('Inscrição realizada com sucesso.')
      })
      .catch(() => toast.error('Não foi possível realizar a inscrição.'))
  }

  return (
    <main className="newsletter-container">
      <h1 className="newsletter-title">Cadastro de News</h1>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="newsletter-field">
          <label htmlFor="newsletter-nome">Nome</label>
          <input
            placeholder="Nome"
            id="newsletter-nome"
            name="nome"
            type="text"
            autoComplete="name"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="newsletter-field">
          <label htmlFor="newsletter-email">E-mail</label>
          <input
            placeholder="E-mail"
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button className="newsletter-submit" type="submit">
          Inscrever-se
        </button>
      </form>

      <section className="newsletter-list" aria-labelledby="inscritos-title">
        <div className="newsletter-list-heading">
          <h2 id="inscritos-title">Inscritos</h2>
          <span>{Array.isArray(inscritos) ? inscritos.length : 0}</span>
        </div>

        {!Array.isArray(inscritos) || inscritos.length === 0 ? (
          <p className="newsletter-message">Ainda não há inscrições.</p>
        ) : (
          <ul className="newsletter-entries">
            {inscritos.map((inscrito, index) => (
              <li className="newsletter-entry" key={inscrito.id || index}>
                <strong>{inscrito.nome}</strong>
                <span>{inscrito.email}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ToastContainer />
    </main>
  )
}
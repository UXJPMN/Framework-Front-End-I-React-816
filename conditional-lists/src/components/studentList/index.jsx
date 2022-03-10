import { Component } from 'react'

class StudentList extends Component {
  render() {
    const studentArray = [
      { name: 'João', email: 'joao@email.com', id: 0 },
      { name: 'Ana', email: 'ana@email.com', id: 1 },
      { name: 'Paulo', email: 'paulo@email.com', id: 2 },
      { name: 'Pedro', email: 'pedro@email.com', id: 3 },
    ]

    return (
      <>
        <h1>Lista de Alunos</h1>
        { studentArray.map((student) =>
          <div key={ student.id }>
            <p>Nome: { student.name }</p>
            <p>Email: { student.email }</p>
          </div>
        )}
      </>
    )
  }
}

export default StudentList

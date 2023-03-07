import { useState } from 'react'
import './Form.css'
import Input from '../Input'
import SelectList from '../SelectList'
import Button from '../Button'

const Form = (props) => {    

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [nameTeam, setNameTeam] = useState('')
  const [colorTeam, setColorTeam] = useState('')

  const save = (event) => {
    event.preventDefault()   

    props.formSent({
      name,
      role,
      image,
      team
    })
    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }

  const saveTeam = (event) => {
    event.preventDefault()

    props.saveTeam({ 
      name: nameTeam, 
      color: colorTeam
    })
    setNameTeam('')
    setColorTeam('')
  }

  return (
    <section className="form">

      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input 
          label="Nome" 
          placeholder="Digite o seu nome" 
          value={name}
          required={true}
          changed={value => setName(value)} 
        />
        <Input 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          required={true} 
          value={role}
          changed={value => setRole(value)} 
        />
        <Input 
          label="Imagem" 
          placeholder="Ex.: https://github.com/username.png" 
          value={image}
          changed={value => setImage(value)}
        />
        <SelectList 
          label="Time" 
          items={props.teams} 
          required={true} 
          value={team}
          changed={value => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>

      <form onSubmit={saveTeam}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Input 
          label="Nome" 
          placeholder="Digite o nome do time" 
          value={nameTeam}
          required={true}
          changed={value => setNameTeam(value)} 
        />
        <Input 
          label="Cor" 
          type="color"
          placeholder="Digite a cor do time" 
          required={true} 
          value={colorTeam}
          changed={value => setColorTeam(value)} 
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  )
}

export default Form
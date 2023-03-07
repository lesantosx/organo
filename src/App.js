import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'

    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'

    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'

    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'

    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#D86EBF'

    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FEBA05'

    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'

    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },    
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },    
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },   
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    }, 
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    }    
  ]

  const [collaborators, setCollaborators] = useState(inicial)

  const newCollaborator = (collaborator) => {    
    setCollaborators([...collaborators, collaborator])
  }

  function deleteCollaborator(id){
    setCollaborators(collaborators.filter( co => co.id !== id))    
  }

  function changeColorTeam(color, id){
    setTeams(teams.map( team => {
      if(team.id === id){
        team.color = color
      }
      return team
    }))
  }

  function saveTeam(newTeam){    
    setTeams([...teams, { ...newTeam, id: uuidv4() } ])
  }

  function onFavorite(id){
    setCollaborators(collaborators.map(co => {
      if(co.id === id) co.favorite = !co.favorite     
      return co
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams} 
        formSent={collaborator => newCollaborator(collaborator)}
        saveTeam={saveTeam}
      />
      {teams.map(team => {      
        return <Team 
            key={team.id} 
            id={team.id}
            name={team.name} 
            primaryColor={team.color} 
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
            deleteCollaborator={deleteCollaborator}
            changeColor={changeColorTeam}
            onFavorite={onFavorite}
          />
        }
      )}     
      <Footer /> 
    </div>
  );
}

export default App

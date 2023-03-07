import './Team.css'
import Collaborator from '../Collaborator'
import hexToRgba from 'hex-to-rgba'

const Team = (props) => {
  return (   
    props.collaborators.length > 0 && 
    <section 
      className="team" 
      style={{backgroundImage: 'url(/images/background.png)', backgroundColor: hexToRgba(props.primaryColor,  '0.4') }}
    >
      <input 
        type='color'        
        value={props.primaryColor} 
        className='input-color' 
        onChange={event => props.changeColor(event.target.value, props.id)} 
      />

      <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>      
      <div className="collaborators">
        {props.collaborators.map(collaborator => {
          return <Collaborator 
            key={collaborator.id}
            id={collaborator.id}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
            favorite={collaborator.favorite}
            background={props.primaryColor}
            deleteCollaborator={props.deleteCollaborator}
            onFavorite={props.onFavorite}
          />
        })}
      </div>      
    </section>
  )
}

export default Team
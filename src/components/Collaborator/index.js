import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Collaborator.css'

const Collaborator = (props) => {
  
  const propsFavorite = {
    size: 25,
    onClick: () => props.onFavorite(props.id)
  }
  return (
    <div className='collaborator'>

      <AiFillCloseCircle 
        size={25}
        className='delete' 
        onClick={() => props.deleteCollaborator(props.id)}
      />

      <div className='header' style={{backgroundColor: props.background}}>
        <img src={props.image} alt={props.name}/>
      </div>
      <div className='footer-co'>
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
        <div className='favorite'>
          {props.favorite 
            ? <AiFillHeart {...propsFavorite} color='ff0000' />
            : <AiOutlineHeart {...propsFavorite} />
          }
        </div>
      </div>
    </div>
  )
}

export default Collaborator
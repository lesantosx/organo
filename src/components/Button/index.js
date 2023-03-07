import './Button.css'

const Button = (props) => {
  return (
    <button type="submit" className='button'> 
      {props.children}
    </button>
  )
}

export default Button
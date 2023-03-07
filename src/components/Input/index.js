import './Input.css'

const Input = ({type = 'text', label, changed, required = false, placeholder, value}) => {  
  
  const changeValue = (event) => {
    changed(event.target.value)
  }

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        onChange={changeValue}         
        placeholder={placeholder}
        value={value}
        required={required} 
      />
    </div>
  )
}

export default Input
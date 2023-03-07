import './SelectList.css'

const SelectList = (props) => {

  const changeValue = (event) => {
    props.changed(event.target.value)
  }

  return (
    <div className="list">
      <label>{props.label}</label>
      <select onChange={changeValue} required={props.required} value={props.value}>
        <option value="">Selecione um time</option>
        {props.items.map(item => <option key={item.id}>{item.name}</option>)}        
      </select>
    </div>
  )

}

export default SelectList
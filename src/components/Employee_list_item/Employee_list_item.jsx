import './employee_list_item.css'
import { useState } from 'react'

function EmployeeListItem({ name, salary }) {
  const [promotion, setPromotion] = useState(false)
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        promotion ? 'increase' : null
      }`}
    >
      <span className='list-group-item-label'>{name}</span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={`$${salary}`}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className='btn-cookie btn-sm '
          onClick={() => setPromotion(!promotion)}
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button type='button' className='btn-trash btn-sm '>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default EmployeeListItem

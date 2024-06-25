import './employee_add_form.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function EmployeeAddForm({ addEmployee }) {
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')
  return (
    <div className='app-add-form'>
      <h3>Add new employee</h3>
      <form
        className='add-form d-flex'
        onSubmit={(e) => {
          e.preventDefault()
          addEmployee(name, salary, uuidv4())
          setName('')
          setSalary(0)
        }}
      >
        <input
          type='text'
          className='form-control new-post-label'
          placeholder="What's his name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          className='form-control new-post-label'
          placeholder='How much is his salary?'
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button type='submit' className='btn btn-outline-light'>
          Add
        </button>
      </form>
    </div>
  )
}

export default EmployeeAddForm

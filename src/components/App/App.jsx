import AppFilter from '../App_Filter/App_filter'
import AppInfo from '../App_info/App_info'
import SearchPanel from '../Search_panel/Search_panel'
import './app.css'
import Employee_list from '../Employee_list/Employee_list'
import EmployeeAddForm from '../Employee_add_form/Employee_add_form'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [data, setData] = useState([
    {
      name: 'John C.',
      salary: 1000,
      id: uuidv4(),
      promotion: false,
    },
    {
      name: 'Alex M.',
      salary: 3000,
      id: uuidv4(),
      promotion: false,
    },
    { name: 'Carl W.', salary: 5000, id: uuidv4(), promotion: false },
  ])
  const [search, setSearch] = useState('')

  const addEmployee = (name, salary, id, promotion = false) => {
    if (!name || !salary) {
      return
    }
    setData([...data, { name, salary, id, promotion }])
  }

  const removeEmployee = (id) => {
    setData(data.filter((employee) => employee.id !== id))
  }

  const addPromotion = (id) => {
    const person = data.find((employee) => employee.id === id)
    setData(
      data.map((empl) => {
        if (empl === person) {
          return {
            ...person,
            promotion: !person.promotion,
          }
        }
        return empl
      })
    )
  }

  const willBePromoted = () => {
    let count = 0
    for (const i of data) {
      if (i.promotion) {
        count++
      }
    }
    return count
  }

  //!# WAS HAVING PROBLEMS WITH THIS FUNCTIONALITY
  const searchForEmployee = (str, data) => {
    if (!str) {
      return data
    }
    return data.filter((empl) => empl.name.includes(str))
  }
  const visibleEmp = searchForEmployee(search, data)

  return (
    <div className='app'>
      <AppInfo total={data.length} willBePromoted={willBePromoted} />
      <div className='search-panel'>
        <SearchPanel setSearch={setSearch} />
        <AppFilter />
      </div>
      <Employee_list
        data={visibleEmp}
        removeEmployee={removeEmployee}
        addPromotion={addPromotion}
      />
      <EmployeeAddForm addEmployee={addEmployee} />
    </div>
  )
}

export default App

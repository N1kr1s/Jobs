import AppFilter from '../App_Filter/App_filter'
import AppInfo from '../App_info/App_info'
import SearchPanel from '../Search_panel/Search_panel'
import './app.css'
import Employee_list from '../Employee_list/Employee_list'
import EmployeeAddForm from '../Employee_add_form/Employee_add_form'

function App() {
  const data = [
    {
      name: 'John C.',
      salary: 1000,
      id: 1,
    },
    {
      name: 'Alex M.',
      salary: 3000,
      id: 2,
    },
    { name: 'Carl W.', salary: 5000, id: 3 },
  ]

  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <Employee_list data={data} />
      <EmployeeAddForm />
    </div>
  )
}

export default App

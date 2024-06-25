import EmployeeListItem from '../Employee_list_item/Employee_list_item'
import './employee_list.css'

function Employee_list({ data }) {
  const mapEmployee = data.map((employee) => {
    const { id, ...employeeData } = employee
    return <EmployeeListItem {...employeeData} key={id} />
  })

  return <ul className='app-list list-group'>{mapEmployee}</ul>
}

export default Employee_list

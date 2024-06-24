import './app_filter.css'

function AppFilter() {
  return (
    <div className='btn-group'>
      <button className='btn btn-light' type='button'>
        All employee
      </button>
      <button className='btn btn-outline-light' type='button'>
        On promotion
      </button>
      <button className='btn btn-outline-light' type='button'>
        More than 1000$ salary
      </button>
    </div>
  )
}

export default AppFilter

import './app_filter.css'

function AppFilter({ setFilter }) {
  return (
    <div className='btn-group'>
      <button
        className='btn btn-light'
        type='button'
        onClick={() => setFilter('all')}
      >
        All employee
      </button>
      <button
        className='btn btn-outline-light'
        type='button'
        onClick={() => setFilter('promoted')}
      >
        On promotion
      </button>
      <button
        className='btn btn-outline-light'
        type='button'
        onClick={() => setFilter('moreThen1000')}
      >
        More than 1000$ salary
      </button>
    </div>
  )
}

export default AppFilter

import './search_panel.css'

function SearchPanel({ searchForEmployee }) {
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Find employee'
      onChange={(e) => searchForEmployee(e.target.value)}
    />
  )
}

export default SearchPanel

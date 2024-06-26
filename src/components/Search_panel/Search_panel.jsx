import './search_panel.css'

function SearchPanel({ setSearch }) {
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Find employee'
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchPanel

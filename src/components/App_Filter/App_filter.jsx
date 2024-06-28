import './app_filter.css'

function AppFilter({ setFilter, filter }) {
  const buttonsData = [
    {
      name: 'all',
      label: 'All employee',
    },
    {
      name: 'promoted',
      label: 'On promotion',
    },
    { name: 'moreThen1000', label: 'More then 1000$ salary' },
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name
    return (
      <button
        className={active ? 'btn btn-light' : 'btn btn-outline-light'}
        type='button'
        onClick={() => setFilter(name)}
        key={name}
      >
        {label}
      </button>
    )
  })

  return <div className='btn-group'>{buttons}</div>
}

export default AppFilter

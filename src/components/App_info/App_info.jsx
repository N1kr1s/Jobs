import './app_info.css'

function AppInfo({ total, willBePromoted }) {
  return (
    <div className='app-info'>
      <h1>All employee in company N</h1>
      <h2>Employee count: {total}</h2>
      <h2>Will be promoted: {willBePromoted()}</h2>
    </div>
  )
}

export default AppInfo

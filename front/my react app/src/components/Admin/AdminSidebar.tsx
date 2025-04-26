import { Link } from 'react-router'
import "../../styling/adminSidebar.css"


const AdminSidebar = () => {
  return (
    <div className='admin-sidebar'>
        <Link to='/admin/products'>products</Link>
        <Link to='/admin/users'>users</Link>
    </div>
  )
}

export default AdminSidebar
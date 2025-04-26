import { CartType } from "../../types/cartTypes"
import { UserType } from "../../types/userTypes"
import '../../styling/adminUserCard.css'

const UserCard = ({user, cart}: {user: UserType, cart: CartType | undefined}) => {
  return (
    <div className="admin-user-card">
        <div className="admin-user-info">
            <img className="admin-user-icon"  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="user" />
            <div className="admin-user-details">
                <p className="admin-user-name">{user.name}</p>
                <p className="admin-user-email">{user.email}</p>
                <p className="admin-user-role">role:{user.isAdmin ? 'ADMIN': 'USER'}</p>
            </div>
        </div>
        <div className="admin-user-cart">
            <p  className="admin-user-items-number">items number: {cart ? cart.items.length : 'no data'}</p>
            <p className="admin-user-total">total: {cart ? cart.total : 'no data'}</p>
        </div>
    </div>
  )
}

export default UserCard
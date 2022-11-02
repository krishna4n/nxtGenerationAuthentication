import './index.css'

const Header = props => {
  const {df} = props
  return (
    <nav className="header-container">
      <div className="header-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="header-logout-icon"
        />
        <ul className="full-nav-menu">
          <li>
            <p className="full-nav-link">Home</p>
          </li>
          <li>
            <p className="full-nav-link">Products</p>
          </li>
          <li>
            <p className="full-nav-link">Cart</p>
          </li>
          <li>
            <button type="button" className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-menu">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav home"
          className="nav-link"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-link"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
          alt="nav carts"
          className="nav-link"
        />
      </div>
    </nav>
  )
}

export default Header

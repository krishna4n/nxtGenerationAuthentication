import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    hasError: false,
    username: '',
    password: '',
    userhasError: false,
    passwordhasError: false,
  }

  onUsernameChange = event => {
    if (event.target.value !== '') {
      this.setState({
        username: event.target.value,
        userhasError: false,
      })
    } else {
      this.setState({
        userhasError: true,
      })
    }
  }

  onPasswordChange = event => {
    if (event.target.value !== '') {
      this.setState({
        password: event.target.value,
        passwordhasError: false,
      })
    } else {
      this.setState({
        passwordhasError: true,
      })
    }
  }

  loginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      const userDetails = {username, password}
      this.setState({
        username: '',
        password: '',
      })

      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const Data = await response.json()
      if (response.status === 200) {
        const {history} = this.props
        this.setState({
          hasError: false,
        })
        history.replace('/')
      } else {
        this.setState({
          hasError: true,
        })
      }
    } else {
      this.setState({
        userhasError: true,
        passwordhasError: true,
      })
    }
  }

  render() {
    const {
      hasError,
      username,
      password,
      userhasError,
      passwordhasError,
    } = this.state
    const errorMsg = hasError ? '*Username is not found' : ''
    const userError = userhasError ? 'Invalid Username' : ''
    const passwordError = passwordhasError ? 'Invalid Password' : ''
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-container-img"
        />
        <form className="login-form-container" onSubmit={this.loginSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-form-logo"
          />

          <label htmlFor="username" className="username-label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username"
            value={username}
            placeholder="Username"
            onChange={this.onUsernameChange}
          />
          <p>{userError}</p>
          <label htmlFor="password" className="password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={this.onPasswordChange}
          />
          <p>{passwordError}</p>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="login-error">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm

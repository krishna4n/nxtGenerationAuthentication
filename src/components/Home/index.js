import './index.css'
import Header from '../Header'

const Home = props => {
  const {hl} = props
  return (
    <div className="home-container">
      <Header />
      <div className="home-sub-container">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-image"
        />
        <p className="home-description">
          Fashion is part of the daily air and it doesnot quite help hat it
          changes all the time. Clothes have always been a marker of era and we
          are in a revolution.Your fashion makes you been seen and heard that
          way you are. So, celebrate seasons new and exiciting fashion in your
          own way.
        </p>
        <button type="button" className="home-button">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home

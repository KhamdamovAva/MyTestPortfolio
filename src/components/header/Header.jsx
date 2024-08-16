import './style.css'
function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Mirzoavaz</em>
          </strong>
          <br />
          I am frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
      </div>
    </header>
  )
}

export default Header

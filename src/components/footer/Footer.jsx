import './style.css'

import gitHub from "../../assets/img/icons/gitHub.svg"
import linkedIn from "../../assets/img/icons/linkedIn.svg"
import twitter from "../../assets/img/icons/twitter.svg"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

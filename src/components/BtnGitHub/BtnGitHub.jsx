import gitBlack from './gitHub-black.svg'
import './style.css'
import PropTypes from 'prop-types';

function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel='noreferrer' className="btn-outline">
      <img src={gitBlack} alt="" />
      GitHub repo
    </a>

  )

}
BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired,
};
export default BtnGitHub

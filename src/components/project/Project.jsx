import './style.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Project({ title, img, index }) {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        {index}
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink >
  );
}
Project.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Project;

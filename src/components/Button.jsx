import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <>
        <Link to='/' className='mb-4  hover:scale-110 transform duration-200 text-neutral-500'>
            {title}
        </Link>
    </>

  )
}

Button.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Button
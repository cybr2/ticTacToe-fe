import PropTypes from 'prop-types';


const Square = ({value, onClick}) => {
  return (
    <>
        <button 
            onClick={onClick}
            className='bg-slate-50 text-neutral-500 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] tile rounded-md' 
        >
            {value}
        </button>
    </>
  )
}
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
  }

export default Square


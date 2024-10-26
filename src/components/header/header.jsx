
import Bg_Image from '../../assets/banner-main.png';
import './header.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Header = ({ handleTheBtn }) => {
    return (
        <div className='pt-5'>
            {/* Banner Section */}
            <div className='bg_photo_add  bg-cover flex flex-col bg-black items-center justify-center text-white'>
                <div className='mb-2 mx-auto'>
                    <img className='w-auto h-auto' src={Bg_Image} alt="" />
                </div>

                <div className='flex justify-center items-center flex-col gap-2'>
                    <h1 className='text-3xl text-center font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='justify-center flex font-semibold text-gray-400'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleTheBtn} className='justify-center flex items-center font-bold bg-yellow-400 rounded-xl p-4 text-black'>
                        Claim Free Credit
                    </button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );

}
Header.propTypes = {
    handleTheBtn: PropTypes.func.isRequired,
}

export default Header
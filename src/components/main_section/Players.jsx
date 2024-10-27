import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Datas from '../datas/Datas';
import Footer_Image from '../../assets/logo-footer.png';
import SinglePlayers from './SinglePlayers';

const Players = ({ handleBuyPlayr, storePlayer, handleDeletePlayer }) => {
    const [players, setPlayers] = useState([]);
    const [showPlayers, setShowPlayers] = useState(true)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    const handleSelectedClick = () => {
        setShowPlayers(false);
    };

    const handleAvailableClick = () => {
        setShowPlayers(true);
    };

    return (
        <div>
            <div className='sticky top-20' style={{ display: 'flex', justifyContent: 'end', paddingTop: '20px', marginBottom: '20px' }}>
                <button
                    className={`py-2 px-4 rounded-xl mr-2 ${showPlayers ? 'bg-yellow-400' : 'bg-gray-200'}`}
                    onClick={handleAvailableClick}
                >
                    Available
                </button>
                <button
                    className={`py-2 px-4 rounded-xl ${!showPlayers ? 'bg-yellow-400' : 'bg-gray-200'}`}
                    onClick={handleSelectedClick}
                >
                    Selected ({storePlayer.length})
                </button>
            </div>

            { }
            {showPlayers ?
                <div>
                    <h1 className='text-3xl font-black py-3'>Available Players</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {players.map(player => (
                            <Datas
                                handleBuyPlayr={handleBuyPlayr}
                                key={player.id}
                                player={player} />
                        ))}
                    </div>
                </div>
                :
                <div className='space-y-3'>
                    <h1 className='text-3xl font-black py-3'>Selected Player ({storePlayer.length}/6)</h1>
                    {
                        storePlayer.map(singleMan => <SinglePlayers
                            key={singleMan.id}
                            singleMan={singleMan}
                            handleDeletePlayer={handleDeletePlayer}
                        >
                        </SinglePlayers>
                        )
                    }
                    <button className='btn py-3' onClick={handleAvailableClick}>Add More Players</button>
                </div>
            }

            {/* part_3 */}
            <div className='mt-10'>
                <div className='bg-gradient-to-r from-blue-400 via-white to-yellow-400 p-10 m-5 rounded-xl shadow-xl'>
                    <div className='grid justify-center gap-2'>
                        <h1 className='text-black font-bold text-3xl'>Subscribe to our Newsletter</h1>
                        <p className='text-1xl'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex gap-2'>
                            <input className='rounded-xl p-3 shadow-md' type="email" placeholder='Enter your email' />
                            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-bold py-2 px-6 rounded-xl shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='bg-[#121F5E] pt-10 pb-5'>
                <div>
                    <div className='flex justify-center'>
                        <img src={Footer_Image} alt="Footer Logo" />
                    </div>
                    <div className='flex justify-between text-white mt-6 px-10'>
                        <div>
                            <h1 className='font-bold mb-2'>About Us</h1>
                            <p className='w-[200px] text-sm'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div>
                            <h1 className='font-bold mb-2'>Quick Links</h1>
                            <ul className='text-sm'>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold mb-2'>Subscribe</h1>
                            <div className='flex gap-2'>
                                <input className='rounded-xl p-3 shadow-md' type="email" placeholder='Enter your email' />
                                <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-bold py-2 px-6 rounded-xl shadow-md">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-white flex justify-center mt-6 text-sm'>@2024 Your Company All Rights Reserved.</h2>
                </div>
            </div>
        </div>
    );
};

Players.propTypes = {
    handleTheButton: PropTypes.func,
    handleBuyPlayr: PropTypes.func,
    handleDeletePlayer: PropTypes.func,
    storePlayer: PropTypes.array,
};

export default Players;

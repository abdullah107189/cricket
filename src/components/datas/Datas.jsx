import PropTypes from 'prop-types';
const Datas = ({ player, handleBuyPlayr }) => {
    const { image, name, country, rating, price, buttonText } = player;
    return (
        <>
            <div className=''>
                <div className='rounded-lg p-3 shadow-2xl'>
                    <div><img className='w-full object-cover h-[300px] rounded-xl' src={image} /></div>
                    <div className=''>
                        <h3 className='flex font-bold text-1xl mt-2'><img className='w-8 h-8' src="https://t3.ftcdn.net/jpg/05/60/26/08/240_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt="" /> {name}
                        </h3>
                        <div className='flex justify-between mb-2'>
                            <h4 className='flex gap-2 mt-3'><img className='w-3 h-4 mt-1' src="https://cdn-icons-png.freepik.com/256/16188/16188374.png?semt=ais_hybrid" alt="" />{country}</h4>
                            <button className='badge'>All-Rounder</button>
                        </div>
                        <hr />
                        <h2 className='mt-2'>Ratting</h2>
                        <div className='flex justify-between'>
                            <h2>{rating}</h2>
                            <h2>{rating}</h2>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price: ${price}</p>
                            <button onClick={() => handleBuyPlayr(price, player)} className="btn mt-2">

                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

Datas.propTypes = {
    player: PropTypes.object.isRequired,
    handleBuyPlayr: PropTypes.func.isRequired,
}


export default Datas;

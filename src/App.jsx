// import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import Players from './components/main_section/Players'
import logo from '../assets/logo.png';
import { toast, ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
function App() {
  const [addmoney, setAddMoney] = useState(0);
  const [storePlayer, setStorePlayer] = useState([])
  const [btn_is_active, set_btn_active] = useState({
    Available: true,
    status: 'Available'
  });

  const handleActiveBtn = (status) => {
    if (status === 'Available') {
      set_btn_active({
        Available: true,
        status: 'Available'
      });
    } else {
      set_btn_active({
        Available: false,
        status: 'Selected'
      });
    }
  };
  // header section pass func handleTheBtn 


  const handleTheBtn = () => {
    setAddMoney(addmoney + 12000000);
    toast.success('add'), {

    }
  };
  const handleBuyPlayr = (price, player) => {

    if (addmoney < price) {
      return toast.warning('first earn to taka..')
    }
    const newPrice = addmoney - price

    // add players code here 
    const newPlayers = [...storePlayer, player]
    if (storePlayer.length === 0) {
      setStorePlayer(player)
    }
    if (storePlayer.length === 6) {
      return toast.warning('you only add 6 player')
    }
    for (let singlePlayer of storePlayer) {
      if (singlePlayer.id === player.id) {
        return toast.error('already added this player')
      }
    }
    toast.success(`added player ${player.name}`)
    setAddMoney(newPrice)
    setStorePlayer(newPlayers)
  }

  // delet function code
  const handleDeletePlayer = (id) => {
    const filter = storePlayer.filter(player => player.id !== id)
    setStorePlayer(filter)
  }

  return (
    <div className='container mx-auto'>
      <ToastContainer position='top-center'></ToastContainer>
      <div className='backdrop-blur-sm sticky top-0 p-3 bg-white'>
        <div className='flex justify-between items-center z-40'>
          <div><img className="" src={logo} alt="" /></div>
          <div className=''>
            <ul className='flex items-center gap-16 mt-2'>
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
              <button className='flex btn bg-transparent'><h1>{addmoney} Coin</h1>
                <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/1490/1490853.png" alt="" /></button>

            </ul>
          </div>
        </div>

      </div>
      <Header
        btn_is_active={btn_is_active}
        handleActiveBtn={handleActiveBtn}
        handleTheBtn={handleTheBtn}
      ></Header>


      <Players
        storePlayer={storePlayer}
        handleDeletePlayer={handleDeletePlayer}
        handleBuyPlayr={handleBuyPlayr}
      ></Players>

    </div>
  )
}

export default App

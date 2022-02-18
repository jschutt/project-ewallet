
import {GiWallet} from 'react-icons/gi';
import{BsFillArrowRightCircleFill} from 'react-icons/bs';
import Wallet from '../pictures/wallet.png';
import '../styles/startPage.css'

const StartPage = () => {
  return (
    <>
    <section>
      <p><GiWallet/> E-wallet</p>
      <header>
        <img src={Wallet} alt="image" />
      </header>
      <h1>Easy way to manage your paymant</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <BsFillArrowRightCircleFill/>
      </section>
      </>
  )
}

export default StartPage
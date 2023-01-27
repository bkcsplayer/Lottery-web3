import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import WalletConnectBtn from './ConnectWalletBtn'
import logo from '../public/Polygon.png'

import Image from 'next/image'
const Header = () => {
  const { address, connectWallet } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Image src={logo} height={100} width={200}/>
      </div>
      <div className={style.title}>Lottery</div>
      
      {!address ? (
        <WalletConnectBtn connectWallet={connectWallet} />
      ) : (
        <UserCard address={address} />
      )}
    </div>
  )
}
export default Header
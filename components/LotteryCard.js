import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'

const LotteryCard = () => {
  // TODO: Get the data needed from context
  const { lotteryId, lastWinner, lotteryPot, enterLottery, pickWinner } =useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {/* TODO: Dynamically render the lotteryID */}
         <span className={style.textAccent}>Round {lotteryId ? lotteryId : '1'}</span>
      </div>
      <div className={style.pot}>
        {/* TODO: Dynamically render the lottery pot */}
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot}</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      {!lastWinner.length?(
        <div className={style.winner}> No Winner Yet</div>
      ):(
        <div className={style.winner}>
<div className={style.winner}>
           {truncateEthAddress(lastWinner[lastWinner.length - 1])}
           </div>
</div>
      )}
      
      {/* TODO: Add onClick functionality to the buttons */}
      <div className={style.btn} onClick={enterLottery}>Enter</div>
      <div className={style.btn} onClick={pickWinner}>Pick Winner!</div>
    </div>
  )
}
export default LotteryCard

// import style from '../styles/PotCard.module.css'
// import truncateEthAddress from 'truncate-eth-address'
// import { useAppContext } from '../context/context'
// const LotteryCard = () => {
//   const { lotteryId, lastWinner, lotteryPot, enterLottery, pickWinner } =
//     useAppContext()

//   return (
//     <div className={style.wrapper}>
//       <div className={style.title}>
//         Lottery{' '}
//         <span className={style.textAccent}>#{lotteryId ? lotteryId : '1'}</span>
//       </div>
//       <div className={style.pot}>
//         Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
//       </div>
//       <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
//       {!lastWinner.length ? (
//         <div className={style.winner}>No winner yet</div>
//       ) : (
//         lastWinner.length > 0 && (
//           <div className={style.winner}>
//             {truncateEthAddress(lastWinner[lastWinner.length - 1])}
//           </div>
//         )
//       )}
//       <div className={style.btn} onClick={enterLottery}>
//         Enter
//       </div>
//       <div className={style.btn} onClick={pickWinner}>
//         Pick Winner!
//       </div>
//     </div>
//   )
// }
// export default LotteryCard
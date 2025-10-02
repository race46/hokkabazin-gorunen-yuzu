import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatisticCard from './components/StatisticCard'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(()=> {
    fetch('https://api.binance.com/api/v3/ticker/24hr').then(r => r.json()).then(icons => icons.filter(i => i.symbol.endsWith('USDT'))).then(setCoins)
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 p-5'>
      {coins.map((coin, index) => <StatisticCard index={index} key={coin.symbol} coin={coin} />)}
    </div>
  )
}

export default App

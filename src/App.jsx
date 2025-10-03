import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatisticCard from './components/StatisticCard'

async function fetchCoins(){
  const result = await fetch('https://api.binance.com/api/v3/ticker/24hr')
    .then(r => r.json())
    .then(coins => coins.filter(i => i.symbol.endsWith('USDT')))

  // result.sort((i,j) => (parseFloat(i.quoteVolume) - parseFloat(j.quoteVolume)));

  return result;
}

function App() {
  const [coins, setCoins] = useState([])

  useEffect(()=> {
    fetchCoins().then(setCoins)
  }, [])

  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 gap-4 md:p-5 p-1 pt-4'>
      {coins.map((coin, index) => <StatisticCard index={index + 1} key={coin.symbol} coin={coin} />)}
    </div>
  )
}

export default App

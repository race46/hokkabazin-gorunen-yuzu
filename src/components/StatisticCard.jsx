function StatisticCard({coin, index}){
  return (
    <div className="bg-gray-950 h-38  rounded-2xl overflow-hidden outline-1 outline-neutral-800">
      <div className='flex items-center h-2/3 pl-2'>
        <a href="https://react.dev" target="_blank">
          <img src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/refs/heads/master/128/icon/${coin?.symbol?.slice(0,-4).toLowerCase()}.png`} className="logo react size-14" alt="React logo" />
        </a>
        <div className='ml-4'>
          <div className='text-neutral-500'>{index + ' ' +coin?.symbol}</div>
          <div className='text-2xl'>${parseFloat(coin?.askPrice)}</div>
        </div>
        <div className={`${coin?.priceChange?.startsWith('-') ? 'bg-red-800' :'bg-green-900'} rounded-full px-5 py-0.5 mt-auto ml-auto mr-2 mb-2`}>
          {coin?.priceChangePercent}%
        </div>
      </div>
      <div className="w-full h-1/3 bg-gray-900 pt-3 pl-5 hover:drop-shadow-2xl hover:drop-shadow-cyan-950">
        {'->'} go statistics
      </div>
    </div>
  )
}


export default StatisticCard
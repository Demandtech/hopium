const data = [
  {
    title: 'Total Supply',
    subTitle: '831,676,861',
  },
  {
    title: 'Burned to date',
    subTitle: '168,323,139',
  },
  {
    title: 'Market cap',
    subTitle: '$170 thousand',
  },
  {
    title: 'Current emissions',
    subTitle: '1/block',
  },
]

const Market = ()=>{
 
 return(
  <div className="market">
    {data.map((item,index)=> {
     return <div key={index} className='market-wrapper'>
         <p>{item.title}</p>
         <h4>{item.subTitle}</h4>
     </div>
    })}
  </div>
 )
}

export default Market
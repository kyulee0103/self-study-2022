import {useState, useEffect} from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [mycoin, setMycoin] = useState("")
  const [getcoin, setGetcoin] = useState(0)
  const [coinNum, setNowcoin] = useState("")
  const [howmany, setHowmany] = useState()
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers").
    then((response) => response.json()).
    then(json => {
      setLoading(false);
      setCoins(json)  
      console.log(json[1])
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    setGetcoin(mycoin)
    setMycoin("")
  }

  const onChange = (e) => {
    setMycoin(e.target.value)
  }

  const whichCoin = (e) => {
    const num = e.target.value
    const coinName = coins[num-1].name
    const coinPrice = coins[num-1].quotes.USD.price
    const total = Math.round(getcoin / coinPrice)
    setNowcoin(coinName)
    setHowmany(total)

  }

  return (
    <div>
      <h1>coin tracker</h1>
      <div>
        <form onSubmit = {onSubmit}>
          <label htmlFor = "ask">how many USD do you have?</label>
       <input onChange = {onChange} id = "ask" value = {mycoin}  type= "number" placeholder = "how many USD do you have?"></input>
       <h3>i have {getcoin} USD</h3>
       </form>
      </div>
      {loading ? "Loading..." : null}
      {getcoin == 0 ? null :
      <select onChange = {whichCoin}>
        {coins.filter(coin => coin.quotes.USD.price <= getcoin && coin.quotes.USD.price >= 1).map((coin) => (<option value = {coin.rank} key ={coin.quotes.USD.price} >{coin.name}({coin.symbol}) : {Math.round(coin.quotes.USD.price)} USD </option>))}
      </select>
      }
      {coinNum !== "" ? <h3>you can buy {howmany} coins of {coinNum} token </h3> : null}
            

   </div>
  );
        }

export default App;



//https://api.coinpaprika.com/v1/tickers

import './Eachcard.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const EachCard = ({el}) => {
  return (
    <div className='eachcarddiv'>
        <h5>{el.title}</h5>
        <div className='eachcardfirstdiv'>
            <p><CurrencyRupeeIcon sx={{height:"15px"}}/>{el.price}</p>
            <p><del><CurrencyRupeeIcon sx={{height:"15px"}}/>{el.strike_off}</del></p>
        </div>
        <div className='eachcardseconddiv'>
            <button>Buy now</button>
            <button>Add to Cart</button>
        </div>
        <img src={el.image} alt="" />
        <div className='eachcardthirddiv'>
            <p>6GB+{el.storage}</p>
            <p>12GB+{el.storage}</p>
        </div>
    </div>
  )
}

export default EachCard




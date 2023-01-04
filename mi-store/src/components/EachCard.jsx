import './Eachcard.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {useNavigate} from 'react-router-dom'


const EachCard = ({ el }) => {
  const navigate=useNavigate()

  const handleClick=()=>{
    
navigate(`/singleproduct/${el._id}`)
  }
  return (
    <div className='eachcarddiv'>
      <h5>{el.title}</h5>
      <div className='eachcardfirstdiv'>
        <p><CurrencyRupeeIcon sx={{ height: "15px" }} />{el.price}</p>
        <p><del><CurrencyRupeeIcon sx={{ height: "15px" }} />{el.strike_off}</del></p>
      </div>
      <div className='eachcardseconddiv'>
        <button onClick={handleClick}>Buy now</button>
        <button>Add to Cart</button>
      </div>
      <img src={el.image} alt="" />
      <div className='eachcardthirddiv'>
        <p>8GB+128GB</p>
        <p>12GB+256GB</p>
      </div>
    </div>
  )
}

export default EachCard




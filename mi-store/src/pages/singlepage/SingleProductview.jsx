import { Box } from '@mui/system'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './SingleProductView.css'
import { getCartData } from '../../redux/appredux/Action';
import { useDispatch } from 'react-redux'
import { RotatingSquare } from 'react-loader-spinner';
import './SingleProductView.css'

const SingleProductview = () => {
    const [quantity, setQuantity] = useState(1);
    const [choose, setChoose] = useState([]);
    const [data, setData] = useState({})
    const [totalprice, setTotalprice] = useState();
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const param = useParams();
    const tv = ["https://i01.appmifile.com/webfile/globalimg/7/845301BA-AE14-10A4-D7D9-15D830EE43BD.jpg", "https://i01.appmifile.com/webfile/globalimg/7/59295F81-DDB7-54D9-D900-91BAD83E459C.jpg",
        "https://i01.appmifile.com/webfile/globalimg/7/7B21CA23-3A52-D8F9-AD66-EF529F211A27.jpg", "https://i01.appmifile.com/webfile/globalimg/7/72ABE6B8-D4FB-2F53-B051-2593408B3660.jpg",
        "https://i01.appmifile.com/webfile/globalimg/7/1121CF0A-B725-B659-8301-4E0451C27009.jpg", "https://i01.appmifile.com/webfile/globalimg/7/3B1EC0F3-7057-8BC1-B03E-87DB3310CB3E.jpg"
    ]

    const phone = ["https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-11t-pro-5g/pc.jpg", "https://i02.appmifile.com/235_operator_sg/19/01/2022/de395496dc28adc2de942affcd067e8c.jpg",
        "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-11t-pro/overview21.png", "https://i02.appmifile.com/64_operator_sg/08/02/2022/af6b4e3c697b8f4435413d8cc84ce6a7.png",
        "https://i02.appmifile.com/770_operator_sg/19/01/2022/3c497f6173c91be107245e00fce86c40.jpg", "https://i02.appmifile.com/649_operator_sg/19/01/2022/f2cce8bdefcb77ff148e90462a0d8fc1.png"
    ]

    const laptop = ["https://i01.appmifile.com/webfile/globalimg/products/pc/mi-notebook-pro/section03.jpg", "https://i02.appmifile.com/289_operator_sg/23/08/2021/37547c0dc0448c90303b43ff997dc1a2.jpg",
        "https://i02.appmifile.com/668_operator_sg/23/08/2021/d89a5c5b929d7806794e23837ac62e72.jpg", "https://i02.appmifile.com/507_operator_sg/23/08/2021/a5806da2b06b468d766aa4f743ee2c88.jpg",
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-notebook-ultra/section16.jpg", "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-notebook-ultra/section1801.jpg"
    ]


    useEffect(() => {
        fetch();
        async function fetch() {
            const phonedata = await axios.get(`http://localhost:8080/phones/single/${param.id}`).then((res) => res.data)
            const tvs = await axios.get(`http://localhost:8080/tv/single/${param.id}`).then((res) => res.data)
            if (phonedata) {
                setData(phonedata);
                setChoose(phone);
                setTotalprice(phonedata.price)
                setLoading(false)
            } else if (tvs) {
                setData(tvs);
                setChoose(tv);
                setTotalprice(tvs.price)
                setLoading(false)
            }
        }

    }, [param.id])

    if (isLoading) {
        return <div className='loader'>
            <RotatingSquare
                height="100px"
                width="200px"
                color="#ff6900"
                ariaLabel="rotating-square-loading"
                strokeWidth="4"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    const handleincrement = () => {
        const total = totalprice - (quantity * Number(data.price))
        setQuantity(quantity + 1)
        setTotalprice(total)
    }
    const handledecrement = () => {
        const total = totalprice - (quantity * Number(data.price))
        setQuantity(quantity - 1)
        setTotalprice(total)
    }
    const handlebuy = () => {
        data.quantity = quantity;
        let dataprod = JSON.parse(localStorage.getItem("cart")) || [];
        dataprod.push(data)
        localStorage.setItem("cart", JSON.stringify(dataprod));
        dispatch(getCartData())
        navigate("/cart")
    }
    return (
        <div className='singlemain'>
            <div >
                <div>
                    <img src={data.image} alt="" width="450px" height="400px" />
                </div>
                <div className='proddiv'>
                    <h2>{data.title}</h2>
                    <p >8GB+256GB</p>
                    <div className='proddiv1'>
                        <h6><CurrencyRupeeIcon sx={{ height: "15px" }} />{data.price}</h6>
                        <h6><del><CurrencyRupeeIcon sx={{ height: "15px" }} />{data.strike_off}</del></h6>
                    </div>
                    <ul>
                        <li>10% Instant Discount up to ₹1,000 with HDFC & SBI cards</li>
                        <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
                        <li>Get 3 months of Youtube Premium Membership Free</li>
                        <li>₹4,000 Exchange Bonus | Up to ₹16,500 off with Mi Exchange</li>
                        <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
                    </ul>
                    <div>
                        <ul className='proddiv2'>
                            <li>10 DAYS REPLACEMENT POLICY</li>
                            <li>COD</li>
                            <li>MI SCREEN PROTECT</li>
                            <li>COMPARE</li>
                        </ul>
                    </div>
                    <div className='proddiv3'>
                        <h4>Quantity</h4>
                        <div >
                            <button onClick={handledecrement} disabled={quantity == 1 ? true : false} >-</button>
                            <button >{quantity}</button>
                            <button onClick={handleincrement} >+</button>
                        </div>
                    </div>
                    <div className='proddiv4'>
                        <div>
                            <p>{data.title}</p>
                            <p>{quantity} * {`${data.price}`}</p>
                        </div>
                        <div >
                            <h6>Total</h6>
                            <h5><CurrencyRupeeIcon sx={{ height: "18px" }} />{Number(`${data.price}`) * quantity}</h5>
                        </div>
                    </div>
                    <button onClick={handlebuy}>BUY NOW</button>
                </div>
            </div>


            <div>
                {
                    choose.map((e) => (
                        <img src={e} alt="" style={{ width: "100%" }} />
                    ))
                }

            </div>
        </div>
    )
}

export default SingleProductview
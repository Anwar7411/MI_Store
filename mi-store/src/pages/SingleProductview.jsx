import { Box } from '@mui/system'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const SingleProductview = () => {
    const [quantity, setQuantity] = useState(1);
    const [choose, setChoose] = useState([]);
    const [data, setData] = useState({})
    const [totalprice, setTotalprice] = useState();

    const param = useParams();

    console.log(param.id)

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
        axios.get(`http://localhost:8080/phones/single/${param.id}`)
            .then((res) => {
                setData(res.data);
                setChoose(phone);
                setTotalprice(res.data.price)
            })
    }, [param.id])



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
    return (
        <Box>
            <Box sx={{ width: "60%", display: "flex", margin: "auto", marginTop: "20px" }}>
                <Box>
                    <img src={data.image} alt="" width="450px" height="400px" />
                </Box>
                <Box sx={{ overflow: "auto" }}>
                    <h2>{data.title}</h2>
                    <p sx={{ color: "#a1a1a1" }}>8GB+256GB</p>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <h6><CurrencyRupeeIcon sx={{ height: "15px" }} />{data.price}</h6>
                        <h6><del><CurrencyRupeeIcon sx={{ height: "15px" }} />{data.strike_off}</del></h6>
                    </Box>
                    <ul style={{ color: "grey", listStyleType: "square", lineHeight: "25px" }}>
                        <li>10% Instant Discount up to ₹1,000 with HDFC & SBI cards</li>
                        <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
                        <li>Get 3 months of Youtube Premium Membership Free</li>
                        <li>₹4,000 Exchange Bonus | Up to ₹16,500 off with Mi Exchange</li>
                        <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
                    </ul>
                    <Box>
                        <ul style={{ color: "#ff6900", display: "flex", listStyleType: "square", flexWrap: "wrap", gap: "25px", marginTop: "25px" }}>
                            <li>10 DAYS REPLACEMENT POLICY</li>
                            <li>COD</li>
                            <li>MI SCREEN PROTECT</li>
                            <li>COMPARE</li>
                        </ul>
                    </Box>
                    <Box sx={{ marginBottom: "25px" }}>
                        <h4>Quantity</h4>
                        <Box sx={{ display: "flex", marginTop: "20px", marginBottom: "15px", gap: "10px" }}>
                            <button onClick={handledecrement} disabled={quantity == 1 ? true : false} style={{ border: "1px solid white", height: "30px" }}>-</button>
                            <button style={{ border: "1px solid white", height: "30px" }}>{quantity}</button>
                            <button onClick={handleincrement} style={{ border: "1px solid white", height: "30px" }}>+</button>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto", marginBottom: "20px" }}>
                            <p>{data.title}</p>
                            <p>{quantity} * {`${data.price}`}</p>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto", marginBottom: "20px", color: "#ff6900" }}>
                            <h6>Total</h6>
                            <h5><CurrencyRupeeIcon sx={{ height: "18px" }} />{Number(`${data.price}`) * quantity}</h5>
                        </Box>
                    </Box>
                    <button style={{ display: "block", color: "white", backgroundColor: "#191919", width: "75%", margin: "auto", justifyContent: "center", padding: "3px", borderRadius: "10px", marginBottom: "15px" }}>BUY NOW</button>
                </Box>
            </Box>


            <Box>
                {
                    choose.map((e) => (
                        <img src={e} alt="" style={{ width: "100%" }} />
                    ))
                }

            </Box>
        </Box>
    )
}

export default SingleProductview
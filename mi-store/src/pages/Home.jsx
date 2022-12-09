import React from 'react'
import "./Home.css"
import Carousel_home from '../components/Carousel_home';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Second_Nav from '../components/Second_Nav';

const Home = () => {

const secondCarousel=["https://i02.appmifile.com/500_operator_in/23/02/2022/7dd77194a09db35f46aa82541d30a6f2.jpg","https://i02.appmifile.com/794_operator_in/23/02/2022/29f71b53b9eeba2c95f4ca2ca39b48f8.jpg",
    "https://i02.appmifile.com/154_operator_in/23/02/2022/6402f385dba2e95d1d5a9d250cbf7c8d.jpg","https://i02.appmifile.com/395_operator_in/01/02/2022/89c7d2292f1bafd3b403439df9bd874f.jpg",
    "https://i02.appmifile.com/8_operator_in/01/02/2022/e9853b271494b6f3e9d73ff0cbd65aa6.jpg","https://i02.appmifile.com/842_operator_in/01/02/2022/1353c99ab0e8da2ce9f620b5819995c8.jpg",
    "https://i02.appmifile.com/57_operator_in/01/02/2022/eb24c958c37f58076921f5b94637a4d3.jpg","https://i02.appmifile.com/629_operator_in/01/02/2022/50f678d4f9eab8235ecc51ca730e9eac.jpg",
   ]  
   
const firstCarousel=["https://i02.appmifile.com/185_operator_in/24/11/2022/f939b57b5e415094c4ad2db32f6cabba.jpg","https://i02.appmifile.com/439_operator_in/25/11/2022/ef10a21513490e5e09571cff35d72ff4.gif",
   "https://i02.appmifile.com/913_operator_in/25/11/2022/7a41a0c7c6cdfac17805e973668976a9.jpg","https://i02.appmifile.com/973_operator_in/25/11/2022/6ac8d2fb91248eb8e98814aff36813e9.jpg",
   "https://i02.appmifile.com/806_operator_in/25/11/2022/b447c019fb393fd10663a69bf9368f2c.jpg","https://i02.appmifile.com/296_operator_in/25/11/2022/78a9b959ce5ba2015dd82af7abdca14a.jpg"
   ]      

    return (
        <div>
            <div className='second_Nav'>
                <Second_Nav />
            </div>
            <div>
                <Carousel_home arr={firstCarousel}/>
            </div>

            <div className='maingrid'>
                <p>STAR PRODUCTS</p>
                <div className='homegrid'>
                    <img className='item1' src="https://i02.appmifile.com/389_operator_in/03/11/2022/3a2148271bbafdacbc1108301b5aefd3.jpg?width=612&height=612" />
                    <img className='item2' src="https://i02.appmifile.com/963_operator_in/03/11/2022/6318458aa85664cc34604a000fad1bef.jpg?width=612&height=612" />
                    <img className='item3' src="https://i02.appmifile.com/292_operator_in/03/11/2022/4da1f175194008446d2cedcc70723c59.jpg?width=612&height=612" />
                    <img className='item4' src="https://i02.appmifile.com/865_operator_in/03/11/2022/edadd6e1786c3c4ee608487b74a103c1.jpg?width=612&height=612" />
                </div>

            </div>

            <div className='maingrid'>
                <p>PRODUCT REVIEWS</p>
                <div className='reviewflexdiv'>
                    <div>
                        <img src="https://i02.appmifile.com/259_operator_in/04/02/2022/f76f28e3d4f5b1fce78d461e12e00bc7.jpg?width=606&height=252" alt="" />
                        <p className='reviewflexdivp'>ALL ABOUT PERFORMANCE!</p>
                        <div className='reviewlowerdiv'>
                            <p>REDMI NOTE 11T 5G</p>
                            <p><CurrencyRupeeIcon sx={{ height: "15px" }} />16,999</p>
                        </div>
                    </div>

                    <div>
                        <img src="https://i02.appmifile.com/149_operator_in/04/02/2022/7f9762559b5d78130b310719d37daaea.jpg?width=606&height=252" alt="" />
                        <p className="reviewflexdivp">YOUR HOME GUARD WITH HIGH RESOLUTION</p>
                        <div className='reviewlowerdiv'>
                            <p>MI HOME SECURITY CAMERA2K PRO</p>
                            <p><CurrencyRupeeIcon sx={{ height: "15px" }} />4,499</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='lastcarousel'>
                <p>IN THE PRESS</p>
                <div>
                <Carousel_home arr={secondCarousel}/>
                </div>
            </div>

        </div>
    )
}

export default Home
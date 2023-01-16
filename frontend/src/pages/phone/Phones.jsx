import { useEffect, useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import EachCard from '../../components/eachcard/EachCard'
import {useDispatch,useSelector} from 'react-redux'
import { getPhonesData } from '../../redux/appredux/Action'
import { RotatingSquare} from 'react-loader-spinner'
import './Phones.css'

const Phones = () => {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [count,setCount]=useState(5);
    const dispatch=useDispatch();
    const isLoading=useSelector((store)=>store.Appreducer.isLoading)

    useEffect(() => {
        const quarayParams={
            page,
            sort,
            brand,
            limit
        }
        dispatch(getPhonesData(quarayParams)).then((res)=>{
            setData(res.payload.data);
            setCount(Math.ceil(res.payload.count/limit))
        })

    }, [sort, brand,page])

    const handleChangedropdown1 = (event) => {
        setBrand(event.target.value);
    };
    const handleChangedropdown2 = (event) => {
        setSort(event.target.value);
    };
    const handleChangepage = (event, value) => {
        setPage(value);
        
      };
       
      if(isLoading){
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
    
    return (
        <div  className='phonediv'>
            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: "150px", margin: "15px 120px",border:"1px solid #ff6900" }} >
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={brand}
                            label="Brand"
                            onChange={handleChangedropdown1}
                        >
                            <MenuItem value="redmi">Redmi</MenuItem>
                            <MenuItem value="xiaomi">Xiaomi</MenuItem>
                            <MenuItem value="">All</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: "150px", margin: "15px 0px",border:"1px solid #ff6900" }}>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort"
                            onChange={handleChangedropdown2}
                        >
                            <MenuItem value="1">Low To High</MenuItem>
                            <MenuItem value="-1">High To Low</MenuItem>
                            <MenuItem value="">None</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div>
                {data && data?.map((el) => (
                   <EachCard el={el} />
                ))}
            </div>
            <div >
                <Stack spacing={4}>
                    <Pagination count={count} page={page} onChange={handleChangepage} color="primary" />
                </Stack>
            </div>
           
        </div>
    )
}

export default Phones
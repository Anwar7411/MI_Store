import { useEffect, useState } from 'react'
import axios from "axios"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import EachCard from '../../components/eachcard/EachCard'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getPhonesData } from '../../redux/appredux/Action'
import { RotatingSquare, ThreeDots } from 'react-loader-spinner'

const Phones = () => {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [count,setCount]=useState(5);
    const dispatch=useDispatch();
    const phones=useSelector((store)=>store.Appreducer.phones)
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
        return <div style={{marginTop:"300px",marginLeft:"45%",marginBottom:"500px"}}>
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
        <div style={{marginTop:"100px"}}>
            <div style={{ display: "flex" }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: "150px", margin: "15px 120px",border:"1px solid #ff6900" }}>
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
            <div style={{ width: "95%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", background: "#f7f7f7", marginTop: "20px" }}>
                {data && data?.map((el) => (
                   <EachCard el={el} />
                ))}
            </div>
            <div style={{margin:"30px 200px 30px 600px"}}>
                <Stack spacing={4}>
                    <Pagination count={count} page={page} onChange={handleChangepage} color="primary" />
                </Stack>
            </div>
           
        </div>
    )
}

export default Phones
import { useEffect, useState } from 'react'
import axios from "axios"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import EachCard from '../../components/eachcard/EachCard';
import {useDispatch,useSelector} from 'react-redux'
import { getTvData } from '../../redux/appredux/Action';
import { ThreeDots } from 'react-loader-spinner';
import "../phone/Phones.css"

const Tv = () => {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [count,setCount]=useState(8);
    const dispatch=useDispatch();
    const tvs=useSelector((store)=>store.Appreducer.tv)
    const isLoading=useSelector((store)=>store.Appreducer.isLoading)
    useEffect(() => {
        const quarayParams={
            page,
            sort,
            limit
        }
        dispatch(getTvData(quarayParams)).then((res)=>{
            setData(res.payload.data);
            setCount(Math.ceil(res.payload.count/limit))
        })
    }, [sort,page])
    const handleChangedropdown2 = (event) => {
        setSort(event.target.value);
    };
    const handleChangepage = (event, value) => {
        setPage(value);
      };
      if(isLoading){
        return <div className='loader'>
      <ThreeDots 
                height="100" 
                width="100" 
                radius="9"
                color="#ff6900" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />
        </div>
     }
     
    return (
        <div className='phonediv'>
            <div >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: "150px", margin: "15px 120px",border:"1px solid #ff6900" }}>
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
                {data.length > 0 && data?.map((el) => (
                    <EachCard el={el} />
                ))}
            </div>
            <div>
                <Stack spacing={4}>
                    <Pagination count={count} page={page} onChange={handleChangepage} color="primary" />
                </Stack>
            </div>
        </div>
    )
}

export default Tv
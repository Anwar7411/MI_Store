import { useEffect, useState } from 'react'
import axios from "axios"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import EachCard from '../../components/eachcard/EachCard';

const Tv = () => {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [count,setCount]=useState(8);
    useEffect(() => {
        axios.get(`http://localhost:8080/tv?order=${sort}&page=${page}&limit=${limit}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data.data);

                setCount(Math.ceil(res.data.count/limit))
            })
    }, [sort,page])
    const handleChangedropdown2 = (event) => {
        setSort(event.target.value);
    };
    const handleChangepage = (event, value) => {
        setPage(value);
      };
     
    return (
        <div style={{marginTop:"100px"}}>
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
            <div style={{ width: "95%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", background: "#f7f7f7", marginTop: "20px" }}>
                {data.length > 0 && data?.map((el) => (
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

export default Tv
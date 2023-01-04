import { useEffect, useState } from 'react'
import axios from "axios"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import EachCard from '../components/EachCard';

const Phones = () => {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [count,setCount]=useState(8);
    useEffect(() => {
        axios.get(`http://localhost:8080/phones?order=${sort}&filter=${brand}&page=${page}&limit=${limit}`)
            .then((res) => {
                setData(res.data.data);

                setCount(Math.ceil(res.data.count/limit))
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
      console.log(page)
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: "200px", margin: "15px 40px" }}>
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
                    <FormControl sx={{ width: "200px", margin: "15px 40px" }}>
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

export default Phones
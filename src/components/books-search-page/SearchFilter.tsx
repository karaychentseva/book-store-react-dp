import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "../../hooks/useSelector";
import { useActions } from "../../hooks/useActions";
import { Box, Pagination } from "@mui/material";

type PropsType = {
}

const PAGE_LIMIT = 10;
const SearchFilter: React.FC<PropsType> = () => {

    const filter = useSelector(state => state.searchBooks.filter);
    const total = useSelector(state => state.searchBooks.data.total);
    const { setQuery, setPage, searchBooks } = useActions();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }
    const handleSearchClick = () => {
        searchBooks(filter);
    }
    return (
        <div className="search-filter">
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleSearchChange} />
            <Button variant="contained" startIcon={<SearchIcon />} onClick={handleSearchClick} >
                Search
            </Button>
            <Box>
                <Pagination 
                    className='pagination'
                    page={filter.page}
                    onChange={handleChangePage}
                    count={Math.ceil(total / PAGE_LIMIT)}
                />
            </Box>
        </div>
        
    )
}

export default SearchFilter;
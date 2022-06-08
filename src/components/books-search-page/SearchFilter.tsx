import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "../../hooks/useSelector";
import { useActions } from "../../hooks/useActions";
import { Pagination } from "@mui/material";
import "./SearchFilter.scss";
import { useTranslate } from "../../hooks/useTranslate";

type PropsType = {
}

const PAGE_LIMIT = 10;
const SearchFilter: React.FC<PropsType> = () => {

    const filter = useSelector(state => state.searchBooks.filter);
    const total = useSelector(state => state.searchBooks.data.total);
    const { setQuery, setPage, searchBooks } = useActions();
    const t = useTranslate();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        searchBooks(filter);
    }
    const handleSearchClick = () => {
        searchBooks(filter);
    }
    return (
        <div className="search-filter">
            <div className="search-row">
                <TextField
                    size="small"
                    id="outlined-basic"
                    label={t('search-filter.search')}
                    variant="outlined"
                    onChange={handleSearchChange}
                />
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={handleSearchClick}
                    className="search-btn"
                >
                    {t('search-filter.search')}
                </Button>
            </div>
            <div className="pagination-row">
                {
                    total == 0
                     ?
                     <></>
                     :
                    <Pagination 
                        className='pagination'
                        page={filter.page}
                        onChange={handleChangePage}
                        count={Math.ceil(total / PAGE_LIMIT)}
                    />
                }
            </div>
        </div> 
    )
}

export default SearchFilter;
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BiSearch} from "react-icons/all";

const Search = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/search/" + search)
    }
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate("/search/" + search)
    }

    return (
        <div className="search__container">
            <form onSubmit={submitHandler} className="search">
                <input type="text"
                       placeholder="Search..."
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="search__input"/>
                <div className="icon" onClick={handleClick}>
                    <BiSearch className="search__icon"/>
                </div>
            </form>
        </div>
    );
};

export default Search;
import React, {useEffect, useState} from "react";

const Search = () => {
    const [search, setSearch] = useState('')

    const updateSearch = e => {
        setSearch(e.target.value);
    }
  
    useEffect( () => {
        console.log(search)
    },[search]) //変更されるたびに呼ばれる
    
    return(
        <div>
            <form>
                <input 
                type={'text'} 
                value={search} 
                onChange={updateSearch}/>
                <button 
                type={'submit'}>検索
                </button>
            </form>
        </div>
    )
}

export default Search;
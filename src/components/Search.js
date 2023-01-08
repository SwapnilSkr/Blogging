import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {search,searchResult} from '../redux/actions/search'
import BlogList from './BlogList'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchIcon from '@mui/icons-material/Search';
import {useNav} from '../context/NavContext'
import '../index.css'
import { useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';

function Search() {
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(true)
  const result = useSelector(state=> state.search)
  const searchResults = useSelector(state=> state.results)
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const {searchOpen, toggleSearchBar} = useNav()
  const handleChange = (e)=>{
    console.log(e.target.value)
    setQuery(e.target.value)
  }
  const handleSearch = async (e)=>{
    e.preventDefault()
    await dispatch(search(query))
    setShowSearchResults(prev=>true)
    // console.log(query)
  }
  const handleSearchQuery = (item)=>{
    setShowSearchResults(prev=>false)
    setSearchQuery(prev=>item)
    dispatch(searchResult(item))
  }  

  useEffect(()=>{
    searchOpen && toggleSearchBar()
  },[pathname])

  return (
    <div className={`container w-full pt-4 px-4 md:px-0 font-manrope transition-all flex flex-col ${!searchOpen && 'h-0 pt-0 p-0 opacity-0'}`}>
        <div className='flex flex-row gap-2 items-center justify-between'>
        <form className='flex w-full gap-2' noValidate onSubmit={handleSearch}>
        <input type={'text'} value={query} onChange={handleChange} placeholder='Search Blogs' className='p-2 w-full border-b-2 focus:outline-none focus:border-black transition-colors' required ></input>
        <button type='submit' className="rounded-full border border-black flex items-center justify-end w-max p-2 bg-black text-white" style={{zIndex:0}}><SearchIcon/></button>
        </form>
        {result.data && <button className={`btn btn-outline-secondary rounded-pill`} onClick={()=>setShowSearchResults(prev=>!prev)}>{ result.data.length > 0 && !showSearchResults ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/> }</button>}
        </div>
        
        <ul className='list-group list-group-flush bg-transparent' style={{display: showSearchResults ? 'block' : 'none'}}>
        {result.loading && <p>Loading...</p>}
        {result.data && result.data.map((item,idx)=><li className='bg-transparent search' role={'button'} onClick={()=>handleSearchQuery(item)}><SearchCard item={item}/></li>)}
        {result.error && !result.loading && <p>{result.error}</p>}
        </ul>
        {/* {<div className=''>
        {searchResults.loading && <p>Loading...</p>}
        {!searchResults.loading && <h1 className="">{searchQuery && 'Showing results for'} {searchQuery}</h1>}
        {searchResults.error && !result.loading && <p>{result.error}</p>}
        </div>} */}
    </div>
  )
}

export default Search
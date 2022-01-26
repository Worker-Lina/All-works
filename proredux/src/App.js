import React from 'react'
import { useDispatch } from 'react-redux'
import FilterBar from './components/Filter/FilterBar'
import Grid from './components/Grid/Grid'
import "./App.css"
import { useSelector } from 'react-redux'
import Product from './components/Product/Product'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.products)

  const sortByType = (brand) =>{
    dispatch({type: "SORT_BY_TYPE", payload: brand})
  }

  const sortByPrice = () =>{
    dispatch({type: "SORT_BY_PRICE", payload: "price"})
  }

  const filters = [
      {id:1, name: "sort by price", func: sortByPrice},
      {id:3, name: "Apple", func: () => sortByType("apple")},
      {id:4, name: "Lenovo", func:() => sortByType("lenovo")},
      {id:5, name: "Samsung", func:() => sortByType("samsung")},
  ]

  
  return (
      <div>
        <Grid countOnRow={3} totalCount={9}></Grid>
      </div>
  )
}

export default App
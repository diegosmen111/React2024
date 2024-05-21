/* eslint-disable react/jsx-no-undef */
import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (

    <div>
      <ChakraProvider>
      <TheRestOfYourApplication />
      </ChakraProvider>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer  title='Tienda'/>
    </div>
  )
     
}

export default App

import React from 'react'
import './App.css'
import Album from './Component/Album'
import Navbar from './Component/Navbar'
import AlbumState from './context/album/AlbumState'
import AddAlbum from '../src/Component/AddAlbum'
 
const App = () => {
  return (
    <>


      <AlbumState>
        <Navbar /> 
        <AddAlbum />
        <Album />
      </AlbumState>
    </>
  )
}

export default App

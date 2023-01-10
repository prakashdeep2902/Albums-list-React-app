import React, { useContext, useState } from 'react'
import '../App.css'
import albumContext from '../context/album/albumContext'
const AddAlbum = () => {

  const context = useContext(albumContext);
  const { Addalbum } = context;
  const [album, setalbum] = useState({ id: '', title: '', userId: '' });

  const handelClick = (e) => {

    e.preventDefault();
    Addalbum(album.id,album.title,album.userId);
    setalbum({id:"",title:"",userId:""});
  }
   const onChange=(e)=>{
    setalbum({...album,[e.target.name]:e.target.value})
   }
  
  return (
    <div className='container_addalbum'>
      <div className='add_containt'>
        <h3>Add A Album</h3>
        <form className='add_containt_form'>
          <div className='title'>
            <label htmlFor="title" className='title'>Title</label>
            <input type="text" name="title" id="title" value={album.title} onChange={onChange} />
          </div>
          <div className='id'>
            <label htmlFor="id" className='UserId'>Id</label>
            <input type="number" name="id" id="id" value={album.id}  onChange={onChange}/>
          </div>
          <div className='UserId'>
            <label htmlFor="userId" className='userid'>UserId</label>
            <input type="number" name="userId" id="userId" value={album.userId} onChange={onChange} />
          </div>

          <div className='Add_album_button'>
            <button  disabled={album.id<100||album.id===""||album.title===""||album.userId===""} onClick={handelClick} >Add Album</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AddAlbum

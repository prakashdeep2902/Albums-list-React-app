import React, { useContext, useEffect, useRef, useState } from 'react'
import AlbumItem from './AlbumItem'
import '../App.css'
import albumContext from '../context/album/albumContext'
const Album = () => {

    // importing the data from context
    const context = useContext(albumContext);
    const { albumData, getData,editalbum} = context;
   
    const ref = useRef(null);
    const refClose = useRef(null);
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, []);

    const [album,SetAlbum]=useState({eid:"",etitle:"",euserId:""})
    const updateNote = (currentAlbum) => {
        console.log(currentAlbum.id)
        ref.current.click();
        SetAlbum({eid:currentAlbum.id,etitle:currentAlbum.title,euserId:currentAlbum.userId})

    }

    const handelClick = (e) => {

        editalbum(album.eid,album.etitle,album.euserId)
        refClose.current.click();
    }

    const onChange=(e)=>{

        SetAlbum({...album,[e.target.name]:e.target.value})
    }


    return (
        <>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={album.etitle} onChange={onChange}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label d-none">id</label>
                                    <input type="text" className="form-control d-none" id="eid" name="eid" value={album.eid} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">userId</label>
                                    <input type="number" className="form-control" id="euserId" name="euserId" value={album.euserId} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handelClick}>Update Album</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='album-container' >
                {

                    albumData.map((album,key) => {
                        return <AlbumItem  key={key} updateNote={updateNote} album={album}  />

                    })
                }
            </div>

        </>
    )
}

export default Album

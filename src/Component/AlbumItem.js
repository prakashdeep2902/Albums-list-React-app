import React, { useContext } from 'react'
import '../App.css'
import albumContext from '../context/album/albumContext'
const AlbumItem = (props) => {

    const context = useContext(albumContext);
    const { deleteAlbum } = context;
    let { album, updateNote } = props
    return (
        <>


            <div className='container'>
                <div className='container_item'>

                    <div className='album-title-id-userid'>
                        <div className='title'>
                            <p>{album.title}</p>
                        </div>
                        <div className='userid_or_id'>
                            <p>Id:{album.id}</p>
                            <p>UserId:{album.userId}</p>
                        </div>
                    </div>

                    <div className='update_and_delate'>

                        <button onClick={() => { updateNote(album) }}>update</button>
                        <button onClick={() => { deleteAlbum(album.id) }}>delete</button>
                    </div>
                </div>

            </div>





        </>
    )
}

export default AlbumItem

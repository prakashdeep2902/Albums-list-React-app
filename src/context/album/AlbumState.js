import React, { useState } from "react";
import albumContext from "./albumContext";

const AlbumState = (props) => {

    // feaching the data from Api
    const albumIntial = [];
    const [albumData, setalbumData] = useState(albumIntial)
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => {
                setalbumData(json);
            });
    };

    // for editing the album

    const editalbum = (id, title, userId) => {

        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ title, userId }),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        let newAlbum = JSON.parse(JSON.stringify(albumData));

        for (let index = 0; index < newAlbum.length; index++) {
            const element = newAlbum[index];

            if (element.id === id) {
                newAlbum[index].title = title;
                newAlbum[index].userId = userId;
                break;
            }

        }
        setalbumData(newAlbum);
    }

    // for deleting the album

    const deleteAlbum = (id) => {


        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
            .then((json) => console.log(json));

        const newAlbum = albumData.filter((album) => {
            return album.id !== id
        })
        setalbumData(newAlbum);

        alert("Album is deleted")

    }


    const Addalbum = async(id,title,userId) => {
         const response=await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                
            },
            body: JSON.stringify({
                id: id,
                title: title,
                userId: userId,
              }),
           
        });

        const album=await response.json();
        setalbumData(albumData.concat(album));

    }
    return (

        <albumContext.Provider value={{ albumData, getData, editalbum, deleteAlbum,Addalbum }}>
            {props.children}
        </albumContext.Provider>

    )
}

export default AlbumState

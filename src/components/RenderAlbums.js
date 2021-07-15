//Home.js
import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import * as service  from '../service/index';
import Search from './Search'
function RenderAlbums() {
    
    const [albums, setalbums] = useState();
    useEffect(()=>{
        service.getAlbums()
            .then(item =>  setalbums(item));
    },[])
    function searchAlbums(term) {
        console.log(term)
        service.getAlbums(term).then(item =>  setalbums(item));
    }
    return  albums && albums.length ?
        albums.map((item,index) => (
        <div  key={index} className="col-md-4 mb-2">
            <Search searchAlbums = {searchAlbums}/>
            <div className="card border-danger">
                <img src={item.album.cover_big} className="card-img-top" alt=""/>
                <div className="card-body">
                    <span className="text-primary">{item.artist.name} </span>
                    <div className="card-title">
                        {item.title}
                    </div>
                </div>
                <div className="card-footer">
                    <div className="links">
                        <Link to={`/Detailes/${item.album.id}`} className="link"><i className="fas fa-info text-danger"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    ))
    : null;
}

export default RenderAlbums;
//Home.js
import React from 'react'
import NavBar from '../components/NavBar'

import RenderAlbums from '../components/RenderAlbums'
function Home(){

    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-10 mx-auto">
                    <NavBar/>
                    <div className="row">
                            {RenderAlbums()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
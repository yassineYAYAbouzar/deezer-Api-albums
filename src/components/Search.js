import React ,{useState}from 'react';
function Search(props) {
    const [term, setterm] = useState();
    const {searchAlbums} = props
    function handleInputChange (event){
        setterm(event.target.value)
    }
    function submitSearch (event) {
        event.preventDefault();
        searchAlbums(term);
        console.log(term)
    }

    return (
    <div className="App">
        <form onSubmit={(event) =>submitSearch(event)}>
            <div className="row">
                <div className="col-md-10">
                    <div className="form-group">
                        <input
                            value={term}
                            onChange={(event) =>handleInputChange(event)}
                            type="text"
                            className="form-control p-4"
                            placeholder="Recherche"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <button className="btn btn-danger" type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );

}

export default Search;

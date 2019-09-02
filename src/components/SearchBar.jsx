import React from 'react'

export default function SearchBar() {
    return (
        <div className="row justify-content-center mt-4 mb-4">
            <div className="input-group mb-2 col-lg-9">
                <input type="search" className="form-control form-control-lg form-control-borderless" placeholder="Classe, élèves, matières.." id="searchbar"></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="submitCountry"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    )
}

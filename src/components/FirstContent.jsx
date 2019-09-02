import React from 'react'

export default function FirstConent() {
    return (
        <div>
            <h5 className="mb-3">Aujourd'hui</h5>
            <div className="card mt-3">
                <div className="card-body d-flex bd-highlight" id="todaytuile">
                    <div>
                        <span className="btn btn-danger align-self-center" id="datebutton">date</span>
                    </div>
                    <div className="mt-3 bd-highlight">
                        <p id="matiere" className="h4 ml-3">Matieres</p>
                        <p id="classecampus" className="ml-3">classe - campus</p>
                    </div>
                    <div class="ml-auto bd-highlight">
                        <button className="btn btn-primary align-self-center" id="selection"><i className="fas fa-angle-double-right fa-2x"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

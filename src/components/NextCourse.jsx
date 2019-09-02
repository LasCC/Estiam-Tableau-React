import React from 'react'

export default function NextCourse() {
    return (
        <div>
            <h4 className="text-italic mt-4">Cours précédent : </h4>
            <div className="container">
                <section id="past">
                    <div className="col-md-11 mx-auto">
                        <div className="container card mt-3" id="pasttuile">
                            <div className="card-body d-flex bd-highlight" id="pastcontent">
                                <div className="bd-highlight align-self-center"><span className="btn btn-primary justify-content-start m-2" id="ects-badge">ECTS</span></div>
                                <div className="bd-highlight flex-grow-1 ml-3"><p id="matiere" className="h4 mt-3">Matieres</p><p id="classe">Classe</p></div>
                                <div className="bd-highlight vr align-self-center"><p id="date_past" className="m-3">Date</p><p id="heure" className="m-3">Heure</p></div>
                                <div className="bd-highlight ml-3 align-self-center"><p id="salle1" className="m-3">Salle</p></div>
                                <div className="ml-auto bd-highlight align-self-center"><button className="btn btn-primary" id="selectionpast"><i className="fas fa-chevron-right"></i></button></div>
                            </div>
                        </div>

                        <div className="container card mt-3" id="pasttuile">
                            <div className="card-body d-flex bd-highlight" id="pastcontent">
                                <div className="bd-highlight align-self-center"><span className="btn btn-danger justify-content-start m-2" id="ects-badge">ECTS</span></div>
                                <div className="bd-highlight flex-grow-1 ml-3"><p id="matiere" className="h4 mt-3">Matieres</p><p id="classe">Classe</p></div>
                                <div className="bd-highlight vr align-self-center"><p id="date_past" className="m-3">Date</p><p id="heure" className="m-3">Heure</p></div>
                                <div className="bd-highlight ml-3 align-self-center"><p id="salle1" className="m-3">Salle</p></div>
                                <div className="ml-auto bd-highlight align-self-center"><button className="btn btn-primary" id="selectionpast"><i className="fas fa-chevron-right"></i></button></div>
                            </div>
                        </div>

                        <div className="container card mt-3" id="pasttuile">
                            <div className="card-body d-flex bd-highlight" id="pastcontent">
                                <div className="bd-highlight align-self-center"><span className="btn btn-warning justify-content-start m-2" id="ects-badge">ECTS</span></div>
                                <div className="bd-highlight flex-grow-1 ml-3"><p id="matiere" className="h4 mt-3">Matieres</p><p id="classe">Classe</p></div>
                                <div className="bd-highlight vr align-self-center"><p id="date_past" className="m-3">Date</p><p id="heure" className="m-3">Heure</p></div>
                                <div className="bd-highlight ml-3 align-self-center"><p id="salle1" className="m-3">Salle</p></div>
                                <div className="ml-auto bd-highlight align-self-center"><button className="btn btn-primary" id="selectionpast"><i className="fas fa-chevron-right"></i></button></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

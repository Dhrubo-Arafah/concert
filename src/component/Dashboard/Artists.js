import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Artists = props => {
    const{image, name, country, nationality, genre, contract} = props.artist
    const element = <FontAwesomeIcon icon={faMusic} />
    return (
        <div className="col">
            <div className="bg-white p-3 rounded">
                <img src={ image } alt={name} className="img-thumbnail rounded-circle border-0"/>
            <h4>{name}</h4>
            <div className="text-start bg-light p-3 mb-2">
            <p>Country: {country}</p>
            <p>Nationality: {nationality}</p>
            <p>Genre: {genre}</p>
            <p>Contract Budget: {contract}BDT</p>
                </div>
                <button className="btn btn-dark w-100" onClick={props.button}>{ element } Add Singer</button>
            </div>
        </div>
    )
}

export default Artists

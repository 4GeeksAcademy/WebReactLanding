import React from "react";
import PropTypes from 'prop-types';

const Card = ({url, title, description}) => {

    return (
    <div className="card mt-5" style={{width: "30rem"}}>
        <img className="card-img-top" src={url} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
         <div className="card-footer d-flex justify-content-center bg-light">
            <a href="#" className="btn btn-primary">¡Averigua más!</a>
         </div>
    </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string
}

export {Card}



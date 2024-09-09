import React from "react";
import PropTypes from 'prop-types';

const Card = ({url, title, description}) => {

    return (
    <div className="card" style={{width: "33rem"}}>
        <img className="card-img-top" src={url} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-center bg-light" style={{border:"1px", borderColor:"black"}}> 
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
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



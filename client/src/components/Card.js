import React from 'react';

const Card = (props) => {
    return(
        <div className = "card mb-3" style = {{ maxWidth : "540px"}}>
            <div className = "row no-gutters">
                <div className = "col-md-4">
                    <img src={props.image} className="card-img" alt="..."/>
                </div>
                <div className = "col-md-8">
                    <div className = "card-body">
                        <h5 className = "card-title">{props.title}</h5>
                        <h5 className = "card-title">{props.author}</h5>
                        <p className = "card-text">{props.description}</p>

                        <a href={props.link} className = "btn btn-primary">
                            View
                        </a>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
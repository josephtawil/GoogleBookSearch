import React from 'react'

export const Form = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Search Books</label>
                    <input className="form-control" {...props} />
                </div>
            </form>      
        </div>
    );
};

export const Button = (props) => {
    return (
        <button className={props.className} {...props}>
            {props.text}
        </button>
    );
};

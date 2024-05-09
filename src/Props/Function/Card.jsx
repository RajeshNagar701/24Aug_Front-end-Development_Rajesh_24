import React from 'react'

function Card({img,title,desc}) {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Card
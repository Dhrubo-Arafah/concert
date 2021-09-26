import React from 'react'

const Cart = props => {
    console.log(props)
    const { image, name } = props.artist;
    return (
        <div className="d-flex flex-row border-rounded h-auto align-items-center bg-light rounded p-1 mb-2">
            <img src={image} alt={name} style={{ width: "50px", height: "50px" }} className="rounded-circle"/>
            <h5 className="ms-2">{ name }</h5>
        </div>
    )
}

export default Cart

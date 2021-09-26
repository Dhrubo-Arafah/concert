import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Artists from './Artists'
import Cart from './Cart';

const MainComponent = () => {
    const [artist, setArtist] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('artists.json')
            .then(res => res.json())
        .then(data=>setArtist(data))
    }, [])

    const onClickHandler = singer => {
        const newCart = [...cart, singer]
        setCart(newCart)
    }

    const singers = artist.map(singer => <Artists
        artist={singer}
        key={singer.key}
        button={()=>{onClickHandler(singer)}}
    />)
    const singer = cart.map(artist => <Cart
        artist={artist}
        key={artist.key}
    />
    )
    const element = <FontAwesomeIcon icon={faMoneyCheck} />
    const totalCost=cart.reduce((prev, next)=>prev+next.contract, 0)
    return (
        <div>
            <div className="bg-white d-flex flex-column flex-md-row container mx-auto align-items-center">
                <div className="col"><img src="https://ep-bd.com/assets/images/ep-bd-Climate_Vulnerable_Forum___s_Next_Confce_to_be_Held_Marking_Mujib_Borsho.png" alt="" className="img-thumbnail border-0"/></div>
                <div className="col">
                    <div className="p-5"><h1>জয় বাংলা কন্সার্ট (International)</h1>
                    <h4>Budget: 1Billion BDT</h4>
                    <br />
                        <button className="btn btn-dark btn-lg">{ element }&nbsp;Book Your Ticket</button></div>
                </div>
            </div>
            <br />
            <div className="row container mx-auto mb-2 p-0">
                <div className="col-12 col-lg-9 ps-lg-0 mb-3 mb-md-0">
                    <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">{singers}
                    </div>
                </div>
                <div className="col-12 col-lg-3 bg-white p-3">
                    <h5 className="text-uppercase text-start">Confirmed Singers: { singer.length }</h5>
                    <div className="h-auto">{singer}</div>
                    <h6>Total Cost: { totalCost }BDT</h6>
                </div>
            </div>
        </div>
    )
}

export default MainComponent

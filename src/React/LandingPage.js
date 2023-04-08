import React from 'react';
import lens from './lens-1418954.png'
import { Link } from 'react-router-dom';
export default function Landing_page() {
    return (
        <div className='main-container1'>
            <div className='parent1'>
                <div className='firstchild1'>
                    <img src={lens} width='450px' height='600px' />
                </div>
                <div className='secondchild1'>
                    <p>10x Team 04</p>
                    <Link to="/p"> <button id='btn-1'>Enter</button></Link>
                </div>
            </div>
        </div>
    )
}

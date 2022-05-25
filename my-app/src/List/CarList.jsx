import React, { Component } from 'react'
import CarItem from './CarItem';
import { cars } from './data';
import './List.css';

/**
 * 1. Note the warning for keys on console.
 * 2. Note the solution for this problem
 * 3. Note why react asks us to add key
 */
export default class CarList extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                    {
                        cars.map(car => {
                            return (
                                <CarItem key={car.id} car={car}></CarItem>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
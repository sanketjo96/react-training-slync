import React, { Component } from 'react'
import './List.css';

const cars = [
    {
        id: '01111',
        name: 'Maruti800',
        company: 'Maruti',
        make: '1992',
    },
    {
        id: '02222',
        name: 'H1678',
        company: 'Honda',
        make: '2008',
    },
    {
        id: '03333',
        name: 'Indica',
        company: 'Tata',
        make: '2003',
    }
]

export default class CarList extends Component {
    render() {
        return (
            <div className='list'>
                <ul>
                    {
                        cars.map(car => {
                            return (
                                <li key={car.id}>{`${car.name} ${car.company} - ${car.make}`}</li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

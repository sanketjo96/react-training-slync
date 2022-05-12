import React, { Component } from 'react'
import './List.css';

const cars = [
    {
        name: 'Maruti800',
        company: 'Maruti',
        make: '1992',
    },
    {
        name: 'H1678',
        company: 'Honda',
        make: '2008',
    },
    {
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
                                <li>{`${car.name} ${car.company} - ${car.make}`}</li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

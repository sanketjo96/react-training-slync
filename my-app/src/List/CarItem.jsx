import React from 'react'

export default function CarItem(props) {
  return (
    <li>{`${props.car.name} ${props.car.company} - ${props.car.make}`}</li>
  )
}

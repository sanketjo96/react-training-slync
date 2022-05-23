import React from 'react'
import Car from './Car'
import ErrorBoundary from './ErrorBoundary'

export default function SafeCarList() {
    return (
        <ErrorBoundary>
            <Car name='Nano'></Car>
            <Car name='i20'></Car>
            <Car></Car>
        </ErrorBoundary>
    )
}

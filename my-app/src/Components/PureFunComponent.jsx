import React, { memo } from 'react'

const PureFunComponent = memo(() => {
    console.log('PureFunComponentWidget')
    return (
        <div>PureFunComponent</div>
    )
})

export default PureFunComponent;
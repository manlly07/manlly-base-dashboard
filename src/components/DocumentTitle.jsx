import React from 'react'
import { Helmet } from 'react-helmet'

const DocumentTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Viettel High Tech</title>
        </Helmet>
    )
}

export default DocumentTitle
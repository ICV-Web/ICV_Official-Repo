import React from 'react'
import loadable from '@loadable/component'

const Layout = loadable(() => import('../components/layout'))
const HomeProjects = loadable(() => import('../components/HomePageProjects'))




const products = () => {
    return (

        <>
            <Layout>
                <HomeProjects/>
            </Layout>
            {/* dfasssdadasdsad */}
        </>

    )
}

export default products

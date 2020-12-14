import React from 'react'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner'
import HomeProjects from '../components/HomePageProjects'


const products = () => {
    return (

        <>
            <Layout>
                <PageBanner/>
                <HomeProjects/>
            </Layout>
        </>

    )
}

export default products

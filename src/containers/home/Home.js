import React, { useContext, useEffect, useState } from 'react';
import List from './List';
import SaitBar from './SaitBar';
import Main from './Main';
import { Pagination } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';
import Footer from './Footer';
import Blog from './Blog';
import BlogSection from './BlogSection';



const Home = () => {
    const [page, setPage] = useState(1)
    const history = useHistory()
    const { getProducts, paginationPages } = useContext(clientContext)
    function getPage() {
        const search = new URLSearchParams(history.location.pathname)
        return search.get('_page')
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?_limit=4&${search.toString()}`)
        setPage(page)
        getProducts(history)
    }

    useEffect(() => {
        getProducts(history)
    }, [])


    return (
        <div style={{ backgroundColor: "#b2ebf2", backgroundSize: "cover" }}>
            {/* <PrimarySearchAppBar /> */}
            <div>
                <Main />
                <List />
                <div />
                <Pagination style={{ display: "flex", justifyContent: "center", marginTop: 15 }} count={5} page={page} onChange={handlePage} size="medium" />
            </div >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <SaitBar />
                <Blog />
            </div>
            <BlogSection />
            <Footer />
        </div >
    );
};

export default Home;
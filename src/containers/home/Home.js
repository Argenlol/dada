import React, { useContext, useEffect, useState } from 'react';
import List from './List';
import SaitBar from './SaitBar';
import Main from './Main';
import { Pagination } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';

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
        <div style={{ backgroundImage: `url(https://mocah.org/uploads/posts/4034417-steamship-ship-tourism-travel-beach-island-sunny-blue-summer-palms-sand-sea-calm-beautiful-white-sky.jpg)`, backgroundSize: "cover" }}>
            {/* <PrimarySearchAppBar /> */}
            <div>
                <Main />
                <List />
                <SaitBar />
                <div />
                <Pagination count={5} page={page} onChange={handlePage} size="medium" />
            </div >
        </div >
    );
};

export default Home;
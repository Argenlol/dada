import React from 'react';
import List from './List';
import SaitBar from './SaitBar';
import Main from './Main';
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <div style={{ backgroundImage: `url(https://mocah.org/uploads/posts/4034417-steamship-ship-tourism-travel-beach-island-sunny-blue-summer-palms-sand-sea-calm-beautiful-white-sky.jpg)`, backgroundSize: "cover" }}>
            {/* <PrimarySearchAppBar /> */}
            <div>
                <Main />
                <List />
                <SaitBar />
                <Footer />
            </div >
        </div >
        </>

    );
};

export default Home;


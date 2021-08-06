import React from 'react';
import Add from './Add';
import CustomTable from './CustomTable';

const AdminPanel = () => {
    return (
        <div style={{ backgroundImage: `url(https://mocah.org/uploads/posts/4034417-steamship-ship-tourism-travel-beach-island-sunny-blue-summer-palms-sand-sea-calm-beautiful-white-sky.jpg)`, backgroundSize: "cover" }}>
            <Add />
            <CustomTable />
        </div>
    );
};

export default AdminPanel;
import React, {useEffect, useState} from 'react';
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
            const {events} = await res.json();
            setEventData(events);
            setLoading(false);
        };
        fetchEvents();
    }, []);

    return (
        <div className="App">
            <Header/>
            { !loading ? <Map eventData={eventData}/> : <Loader/>}
        </div>
    );
}


export default App;

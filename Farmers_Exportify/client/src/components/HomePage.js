/*import React, { useEffect, useState} from "react";
import axios from "axios";

const HomePage = () => {
    const [companyInfo, setCompanyInfo] = useState(null);

    useEffect( () => {
        axios.get('/api/company')
        .then((response) => setCompanyInfo(response.data))
        .catch((error) => console.error("Error fetching company info:", error));
    }, []);

    return (
        <div className="homepage">
            {companyInfo ? (
                <>
                    <h1>{companyInfo.name}</h1>
                    <p>{companyInfo.description}</p>
                    <img src={companyInfo.image} alt={companyInfo.name}/>
                </>
            ):(
                <p>Loading company information...</p>
            )}
        </div>
    );
};
export default HomePage;*/

import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    const [companyInfo, setCompanyInfo] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/company')
            .then((response) => setCompanyInfo(response.data))
            .catch((error) => console.error("Error fetching company info:", error));
    }, []);

    return (
        <div className="container text-center py-5">
            {companyInfo ? (
                <>
                    <h1 className="fw-bold text-success">{companyInfo.name}</h1>
                    <p className="lead text-muted">{companyInfo.description}</p>
                    <img src={companyInfo.image} alt={companyInfo.name} className="img-fluid rounded shadow" />
                </>
            ) : (
                <p className="text-center text-muted">Loading company information...</p>
            )}
        </div>
    );
};

export default HomePage;




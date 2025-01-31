import React, { useEffect, useState} from "react";
import axios from "axios";

const HomePage = () => {
    const [companyInfo, setComanyInfo] = useState(null);

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
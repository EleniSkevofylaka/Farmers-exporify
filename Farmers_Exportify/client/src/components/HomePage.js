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

/*import React, { useEffect, useState } from "react";
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
                    <img src={companyInfo.image} alt={companyInfo.name} className="img-fluid rounded shadow-lg my-4" />
                </>
            ) : (
                <p className="text-center text-muted">Loading company information...</p>
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
        axios.get("http://localhost:3000/api/company")
            .then((response) => setCompanyInfo(response.data))
            .catch((error) => console.error("Error fetching company info:", error));
    }, []);

    return (
        <div className="luxury-homepage d-flex align-items-center justify-content-center text-center">
            <div className="container py-5">
                {companyInfo ? (
                    <>
                        {/* Hero Section */}
                        <h1 className="display-3 fw-bold text-light text-uppercase">
                            Elevating Global Trade with Excellence
                        </h1>
                        <p className="lead text-light opacity-75">
                            Welcome to <span className="text-warning">{companyInfo.name}</span>, 
                            a premier exporter of high-quality agricultural products. 
                            We bring the finest Ethiopian produce to international markets.
                        </p>
                        <button className="btn btn-warning btn-lg fw-bold mt-3">Explore Our Products</button>

                        {/* Company Info Section */}
                        <div className="image-container mt-5">
                            <img 
                                src={companyInfo.image} 
                                alt={companyInfo.name} 
                                className="luxury-image"
                            />
                        </div>

                        {/* Why Choose Us */}
                        <div className="why-choose-us mt-5">
                            <h2 className="text-light fw-bold">Why Choose Farmers Exportify?</h2>
                            <p className="text-light opacity-75">
                                ✔️ Ethically sourced, premium-quality products <br />
                                ✔️ Sustainable farming practices <br />
                                ✔️ Trusted by global partners <br />
                                ✔️ Seamless export and logistics solutions
                            </p>
                        </div>
                    </>
                ) : (
                    <p className="text-light opacity-75">Loading company information...</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;






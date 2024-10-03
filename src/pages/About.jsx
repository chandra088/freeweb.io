import countryFacts from "../api/CountryData.json"
export const About = () => {
    return (<section className="section-about container">
        <h2 className="container-title">
            Here are the intrasting Fact
            <br />
            we'r proud of
        </h2>

        <div className="gradient-cards">

            {
                countryFacts.map((country) => {
                    const { id, country_name, capital, population, interesting_fact } = country

                    {
                        return (

                            <div className="card" key={id}>

                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{country_name}</p>

                                    <p >
                                        <span className="card-description">Capital:</span>
                                        {capital}
                                    </p>
                                    <p >
                                        <span className="card-description">Population:</span>
                                        {population}
                                    </p>
                                    <p >
                                        <span className="card-description">Intrasting Fact:</span>
                                        {interesting_fact}
                                    </p>

                                </div>

                            </div>
                        )
                    }

                })

            }

        </div>

    </section>
    );
};
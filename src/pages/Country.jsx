
import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/countryCard";
import { SearchFilter } from "../components/UI/searchFilter";


export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        // Fetch data in a transition
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data); // store fetched data
        });
    }, []);

    if (isPending) return <Loader />;

    //console.log(search, filter);

    const searchCountry = (country) => {
        // Only filter if there is a search term
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        // If no search term, return true to include all countries
        return country;
    };





    // const searchCountry = (country) => {
    //     if (typeof search === 'string' && search.trim() !== '') {
    //         return country.name.common.toLowerCase().includes(search.toLowerCase());
    //     }
    //     return country;
    // };


    // Function to filter countries based on selected region
    const filterRegion = (country) => {
        if (filter === "all") return country; // If "all" is selected, include all regions
        return country.region === filter;  // Return true if the country region matches the selected filter
    };

    // Main filtering logic: combines both the search and region filter
    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));



    return (
        <section className="country-section">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />


            <ul className="grid grid-four-cols">
                {filterCountries.map((curCountry, index) => {
                    return <CountryCard country={curCountry} key={index} />;

                })}
            </ul>
        </section>
    );
};

// export const SearchFilter = (search, setSearch, filter, setFilter) => {

//     const handleInputChange = (event) => {
//         event.preventDefault();
//         setSearch(event.target.value)
//     }

//     const handleSelectChange = (event) => {
//         event.preventDefault();
//         setFilter(event.target.value)
//     }

//     return (
//         <section className="section-searchFilter container">
//             <input 
//                 type="text" 
//                 placeholder="search" 
//                 // value={search} 
//                 onChange={handleInputChange} 
//             />

//             <select className="select-section" value={filter} onChange={handleSelectChange}>
//                 <option value="all">All  </option>
//                 <option value="africa">Africa</option>
//                 <option value="Americas">Amricas</option>
//                 <option value="Asia">Asia</option>
//                 <option value="Europe">Europe</option>
//                 <option value="Oceania">Oceania</option>

//             </select>
//         </section>
//     )
// }



export const SearchFilter = ({ search, setSearch, filter, setFilter,countries,setCountries }) => {
    const handleInputChange = (event) => {
        setSearch(event.target.value); // This will call setSearch
    };

    const handleSelectChange = (event) => {
        setFilter(event.target.value); // This will call setFilter
    };

    const sortCountries=(value)=>{
        const sortCountries=[...countries].sort((a,b)=>{
            return value==="asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        });
         setCountries(sortCountries);
    }

    return (
        <section className="section-searchFilter container">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("des")}>Asc</button>
            </div>



            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </section>
    );
};

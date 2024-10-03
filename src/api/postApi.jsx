import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD fro the indvi. country name
export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};




// import axios from "axios";

// // Create an axios instance with a base URL
// const api = axios.create({
//   baseURL: "https://restcountries.com/v3.1", // Correct base URL for REST Countries API v3
// });

// // HTTP GET method to fetch country data
// export const getCountryData = () => {
//   return api.get("/all?fields=name,population,region,capital,flags");
// };


// //HTTP get method for the individual country name


// export const getCountryIndData = (name) => {
//   return api.get`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
// };





// import axios from "axios";

// // Create an axios instance with a base URL
// const api = axios.create({
//   baseURL: "https://restcountries.com/v3.1", // Correct base URL for REST Countries API v3
// });

// // HTTP GET method to fetch all country data
// export const getCountryData = () => {
//   return api.get("/all?fields=name,population,region,capital,flags");
// };

// // HTTP GET method to fetch individual country data by name
// export const getCountryIndData = (name) => {
//   return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
// };


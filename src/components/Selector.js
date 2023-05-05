//import { useState } from "react";
//import countriesJson from "../countries.json";

const Selector = ({setCountry, countriesJson}) => {
//	console.log(countriesJson);
//	countriesJson.map((country) => {
//		console.log(country);
//	});

//	const [country, setCountry] = useState("");
//
//	const getCountryData = () => {
//		fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
//			.then(res => res.json())
//			.then(data => console.log(data));
//	};

//	console.log("Selectorのprops: ", props);
	return (
		<div className="selector-container">
			<select onChange={(e) => setCountry(e.target.value)}>
				{
					countriesJson.map((country, index) =>
						<option key={index} value={country.Slug}>{country.Country}</option>
					)
				}
			</select>
		</div>
	);
};

export default Selector;

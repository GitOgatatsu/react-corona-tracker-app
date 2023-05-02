//import { useState } from "react";
//import countriesJson from "../countries.json";

const Selector = (props) => {
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
			<select onChange={(e) => props.setCountry(e.target.value)}>
				<option>Select A Country</option>
				{
					props.countriesJson.map((country, index) =>
						<option key={index} value={country.Slug}>{country.Country}</option>
					)
				}
			</select>
			<button onClick={props.getCountryData}>Get Data</button>
		</div>
	);
};

export default Selector;

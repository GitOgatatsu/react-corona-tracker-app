import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = () => {
//	console.log(countriesJson);
//	countriesJson.map((country) => {
//		console.log(country);
//	});

	const [country, setCountry] = useState("");

	const getCountryData = () => {
		fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
			.then(res => res.json())
			.then(data => console.log(data));
	};

	return (
		<div>
			<p>セレクタ</p>
			<select onChange={(e) => setCountry(e.target.value)}>
				<option>Select A Country</option>
				{
					countriesJson.map((country, index) =>
						<option key={index} value={country.Slug}>{country.Country}</option>
					)
				}
			</select>
			<button onClick={getCountryData}>Get Data</button>
		</div>
	);
};

export default Selector;

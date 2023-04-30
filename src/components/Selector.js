import countriesJson from "../countries.json";

const Selector = () => {
//	console.log(countriesJson);
//	countriesJson.map((country) => {
//		console.log(country);
//	});
	return (
		<div>
			<p>セレクタ</p>
			<select>
				{
					countriesJson.map((country, index) =>
						<option key={index} value="{country.Slug}">{country.Country}</option>
					)
				}
			</select>
		</div>
	);
};

export default Selector;

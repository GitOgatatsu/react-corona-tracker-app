import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TopPage from "./pages/TopPage";
import WorldPage from './pages/WorldPage';
import countriesJson from "./countries.json";


function App() {

	const [country, setCountry] = useState("japan");
	const [countryData, setCountryData] = useState({
		date: "",
		newConfirmed: "",
		totalConfirmed: "",
		newRecovered: "",
		totalRecovered: ""
	});
	const [allCountriedData, setAllCountriesData] = useState([]);
	const [loading, setLoading] = useState(false);




		useEffect(() => {
			const getCountryData = async () => {
				setLoading(true);
				await fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
					.then(res => res.json())
					.then(data => {
						setCountryData({
							date: data[data.length - 1].Date,
							newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
							totalConfirmed: data[data.length - 1].Confirmed,
							newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
							totalRecovered: data[data.length - 1].Recovered
						});
						setLoading(false);
					})
					.catch(err => alert("エラーが発生しました。ページをリロードしてください。"))
			};
			getCountryData();
		}, [country]);


		useEffect( () => {
			fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
			.then(res => res.json())
			.then(data => setAllCountriesData(data.Countries))
			.catch( err => alert( "エラーが発生しました。ページをリロードしてください。"))
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />} />
				<Route path="/world" element={<WorldPage allCountriesData={allCountriedData} />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;

//import { useState } from "react";


const Card = ({allCountriesData}) => {

//	const [allCountriedData, setAllCountriesData] = useState([]);

//	const getAllCountriesData = async () => {
//		await fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
//			.then(res => res.json())
//			.then(data => setAllCountriesData(data.Countries));
//	};

	return (
		<div className="card-container">
			{allCountriesData.map((singleData, index) =>
				<div key={index} className="card">
					<h2>{singleData.Country}</h2>
					<p>新規感染者: {singleData.NewConfirmed.toLocaleString()}</p>
					<p>感染者総数: {singleData.TotalConfirmed.toLocaleString()}</p>
				</div>
			)}
		</div>
	);

};

export default Card;

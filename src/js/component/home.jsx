import React from "react";
import {Card} from "./card.jsx"
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
//create your first component
const Home = () => {

	let card_data = [{url:"https://static.wikia.nocookie.net/brujo/images/0/07/TW3_Diario_Geralt.png/revision/latest?cb=20190910185545&path-prefix=es",title:"Geralt of Rivia", description:"Geralt de Rivia fue un legendario brujo de la Escuela del Lobo, activo durante el siglo XIII. Amaba a la hechicera Yennefer, a pesar de su tumultuosa relación, y era el padre adoptivo de Ciri.  "}, {url:"https://static.wikia.nocookie.net/brujo/images/6/6c/TW3_Diario_Triss_Merigold.png/revision/latest?cb=20190911190229&path-prefix=es",title:"Triss Merigold", description:"Miembro del Consejo Real del Rey Foltest junto con Fercart y Keira Metz, además de una de las miembros fundadoras de la Logia de Hechiceras, Triss estuvo involucrada en la política."}, {url:"https://static.wikia.nocookie.net/brujo/images/2/20/TW3_Diario_Yennefer.png/revision/latest?cb=20190911183852&path-prefix=es",title:"Yennefer of Vengerberg", description:"Yennefer, nacida en la fiesta de Belleteyn de 1173,[3] fue una hechicera que vivió en Vengerberg, la capital de Aedirn. Era el verdadero amor de Geralt de Rivia y una figura materna para Ciri."}, {url:"https://static.wikia.nocookie.net/brujo/images/2/2a/TW3_Diario_Ciri.png/revision/latest?cb=20190910192428&path-prefix=es",title:"Cirilla", description:"Cirilla Fiona Elen Riannon, mejor conocida como Ciri, nació en 1252 o 1253, probablemente durante la fiesta de Belleteyn. Era la princesa de Cintra, la hija de Pavetta y Emhyr var Emreis."}]
	const cardsinHTML = card_data.map((singleCard, index) => {
		return (<Card key={index} title={singleCard.title} url={singleCard.url} description={singleCard.description}></Card>)
	})
	
	return (
		<div className="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row">
				<Jumbotron />
			</div>
			<div className="row">
				<div className="d-flex">{cardsinHTML}</div>
			</div>
		</div>
	);
};
export default Home;

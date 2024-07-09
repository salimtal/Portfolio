// 1 installation des dépendences
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');



// analyse la requête
const cors = require('cors');
const cookieParser = require('cookie-parser')

const path = require('path'); // Import du module 'path' !!!!


const connectDB= require('./config/db')

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors({
	origin: 'http://127.0.0.1:5500',
	optionSuccessStatus:200,

}))



app.use('/' , authRoutes);
app.use('/' , userRoutes);

// Servir les fichiers statiques depuis le répertoire de construction de l'application React
app.use(express.static(path.join(__dirname, 'build')));

// Configuration d'une règle de réécriture d'URL pour renvoyer l'application React
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// 2Lancer l'application sur un port

const start = async() => {
	try {
		await connectDB();
		const port = process.env.PORT || 5050;
		app.listen(port,() =>{
			console.log(`le serveur à démarré sur leport ${port}`);
		})
	} catch { 
		console.log('Erreur lors du démarrage du serveur');
	}
};


start();


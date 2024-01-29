require('dotenv').config();
const mysql = require('mysql');


const conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})


const addConnaissance =  async (req, res) => {
	if (!req.body) {
		return res.status(400).json({ error: 'élément manquant', })
	}

const query = `INSERT INTO connaissances ( langage) VALUES (?)`;
	const {connaissances} = req.body

	conn.query(query, [connaissances], (err)=> {
		if(err) {
			console.error('Erreur lors de l\'insertion de la connaissance:' +err);
			res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
		}
		else {
			res.status(200).json({ message: 'Langage ajouté' });
		}
	})

}


const editConnaissance = (req, res) => {
	const {langage} = req.body
	console.log(req.body)

	const query = `UPDATE connaissances SET langage = ? WHERE Idconnaissance = ?`;

	conn.query(query, [ langage, req.params.id], (err) => {
		if (err) {
			console.error('Erreur lors de la modification du langage: ' + err);

			res.status(500).json({ error: 'Erreur lors de la modification du langage' });
		} else {
			res.status(200).json({ message: 'Langage modifié' });
		}
	});

	if (!req.body) {
		return res.status(400).json({ error: 'élément manquant', })
	}
}

const deleteConnaissance = (req, res) => {

	//  = ? va dire quand tu clique sur le bouton delete liza tu récupére id de l'utilisateur en question pour le supprimer 
	const query = ' DELETE FROM `connaissances` WHERE Idconnaissance = ?';

	conn.query(query, [req.params.id], (err, result) => {
		if (err) {
			console.error('Erreur lors de la suppression du langage: ' + err);

			res.status(500).json({ error: 'Erreur lors de la suppression du langager' });
		} else {
			res.status(200).json({ message: 'Langage supprimé' });
		}
	});
};


// get all langages
const getAllLangage = (req, res) => {
	const query = 'SELECT * FROM connaissances';
	conn.query(query, (err, result) => {
		if (err) {
			console.error("Erreur lors de la récupération des données : " + err);
			res.status(500).json({ error: "Erreur lors de la récupération des langages" });
		} else {
			res.status(200).json(result);
		}
	})
}

const getLangage = (req, res) => {
	const langageId = req.params.id;
	const query = `SELECT langage FROM connaissances WHERE Idconnaissance = ${langageId}`;
	conn.query(query, (err, result) => {
		if (err) {
			console.error("Erreur lors de la récupération des données :" + err);
			res.status(500).json({ error: "Erreur lors de la récupération des langages" })
		} else {
			res.status(200).json(result)
		}
	})
}




const addProject =  async (req, res) => {
	const { image, titre, description } = req.body;

	if (!image || !titre || !description) {
		return res.status(400).json({ error: 'élément manquant', })
	}

const query = `INSERT INTO projet (image, titre, description) VALUES (?,?,?)`;
	// const projet = req.body.projet

	conn.query(query, [image, titre, description], (err)=> {
		if(err) {
			console.error('Erreur lors de l\'insertion de lu projet :' +err);
			res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
		}
		else {
			res.status(200).json({ message: 'Projet ajouté' });
		}
	})

}


const editProject = (req, res) => {
	const {image, titre, description} = req.body
	console.log(req.body)

	const query = `UPDATE projet SET image = ?, titre = ? , description = ?  WHERE Idprojet = ?`;

	conn.query(query, [image, titre, description, req.params.id], (err) => {
		if (err) {
			console.error('Erreur lors de la modification du projet: ' + err);

			res.status(500).json({ error: 'Erreur lors de la modification du projet' });
		} else {
			res.status(200).json({ message: 'Projet modifié' });
		}
	});

	if (!req.body) {
		return res.status(400).json({ error: 'élément manquant', })
	}
}

const deleteProject = (req, res) => {

	//  = ? va dire quand tu clique sur le bouton delete liza tu récupére id de l'utilisateur en question pour le supprimer 
	const query = ' DELETE FROM `projet` WHERE  Idprojet = ?';

	conn.query(query, [req.params.id], (err, result) => {
		if (err) {
			console.error('Erreur lors de la suppression du projet: ' + err);

			res.status(500).json({ error: 'Erreur lors de la suppression du projet' });
		} else {
			res.status(200).json({ message: 'Projet supprimé' });
		}
	});
};


// get all project
const getAllProject = (req, res) => {
	const query = 'SELECT * FROM projet';
	conn.query(query, (err, result) => {
		if (err) {
			console.error("Erreur lors de la récupération des données : " + err);
			res.status(500).json({ error: "Erreur lors de la récupération des projets" });
		} else {
			res.status(200).json(result);
		}
	})
}

const getProject = (req, res) => {
	const projectId = req.params.id;
	const query = `SELECT FROM projet WHERE Idprojet = ${projectId}`;
	conn.query(query, (err, result) => {
		if (err) {
			console.error("Erreur lors de la récupération des données :" + err);
			res.status(500).json({ error: "Erreur lors de la récupération des projets" })
		} else {
			res.status(200).json(result)
		}
	})
}




module.exports = {
	addConnaissance,
	editConnaissance,
	deleteConnaissance,
	getAllLangage,
	getLangage,
	addProject,
	editProject,
	deleteProject,
	getAllProject,
	getProject
	
}

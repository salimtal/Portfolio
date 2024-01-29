require('dotenv').config();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})

const KEY_HASH = process.env.KEY_HASH;



const EMAIL = process.env.EMAIL_ADMIN;
const register = async (req, res) => {
	const { email, password } = req.body;

	if (email != EMAIL) {
		return res.status(400).json({ error: 'email n\'est pas autorisé' })
	}

	function isStrongPassword(password) {
		const lengthCheck = password.length >= 8;
		const lowercaseCheck = /[a-z]/.test(password);
		const uppercaseCheck = /[A-Z]/.test(password);
		const digitCheck = /\d/.test(password);
		const specialCharCheck = /[@$!%*?&]/.test(password);

		return lengthCheck && lowercaseCheck && uppercaseCheck && digitCheck && specialCharCheck;
	}

	if (!isStrongPassword(password)) {

		let errorMessage = 'Le mot de passe doit contenir';


		if (password.length < 8) {
			errorMessage += 'au moins 8 caractères'
		}

		if (!/[A-Z]/.test(password)) {
			errorMessage += 'au moins une majuscule'
		}

		if (!/[a-z]/.test(password)) {
			errorMessage += 'au moins une minuscule'
		}

		if (!/\d/.test(password)) {
			errorMessage += 'au moins un chiffre'
		}

		if (!/[@$!%*?&]/.test(password)) {
			errorMessage += 'au moins un caractère spécial'
		}
		res.status(402).json({
			message: errorMessage
		});

		return;

	}

	// Use bcrypt.hash() function to hash the password
	const hashpassword = await bcrypt.hash(password, 8);

	// Verifier si les champs sont remplis
	if (!email || !password) {
		return res.status(400).json({ error: 'élément manquant', })
	}

	const query = 'INSERT INTO auth (email,password) Values (?,?)';
	conn.query(query, [email, hashpassword], (err, results) => {
		if (err) {
			console.error('Erreur lors de l\'insertion des données : ' + err);

			res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
		} else {
			res.status(200).json({ message: 'Utilisateur enregistré' });
		}
	});

}


const login = async (req, res) => {
	const { email, password } = req.body
	console.log("donnés reçue:", req.body)

	// Verifier si les champs sont remplis
	if (!email || !password) {
		return res.status(400).json({ error: 'élément manquant', })
	}

	// Préparation de la requête SQL pour récup l'utilisateur par son email
	const query = 'SELECT * FROM `auth` WHERE email = ?'
	// exécution de la requête
	conn.query(query, [email], (err, results) => {

		if (err) {
			res.status(500).json({ error: err.message });
		}

		// vérification si l'utilisateur correspond à l'email
		if (results.length === 0) {
			res.status(401).json({ error: 'Utilisateur non trouvé' });
		}

		const admin = results[0]

		bcrypt.compare(password, admin.password, (bcryptErr, results) => {
			if (bcryptErr) {
				return res.status(500).json({ error: 'erreur de compatibilité de mot de passe' })
			}
			if (!results) {
				return res.status(401).json({ error: 'mot de passe incorrect' })
			}

			JWT.sign({ userId: admin.id, email: EMAIL }, KEY_HASH, { expiresIn: '1h' }, (JWTerror, token) => {
				if (JWTerror) {
					return res.status(500).json({ error: 'erreur de génération du token jwt' })
				}
				res.status(200).json({ token });
			})
		})

	});
}



// // Route dashboard protégée par le middleware d'authentification
// const dashboard = (req, res) => {
//     // Vérifier si le token est présent dans les en-têtes de la requête
//     const authorizationHeader = req.headers.authorization;

//     if (!authorizationHeader) {
//         res.status(401).json({
//             message: 'Vous ne pouvez pas accéder à cette page. Token manquant.',
//         });
//         return;
//     }

//     // Extraire le token du header
//     const token = authorizationHeader.split(' ')[1];

//     try {
//         // Vérifier la validité du token
//         const decodedToken = JWT.verify(token, KEY_HASH);
//         const userId = decodedToken.userId;

//         // Rechercher l'utilisateur dans la base de données
//         conn.query('SELECT * FROM auth WHERE idauth = ?', [userId], (err, results) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).json({
//                     message: "Erreur lors de la vérification de l'identifiant",
//                 });
//                 return;
//             }

//             if (results.length === 0) {
//                 res.status(401).json({
//                     message: 'Identifiant non reconnu',
//                 });
// 				console.log(results)
//                 return;
//             }

//             // Si tout est en ordre, autoriser l'accès
//             res.status(200).json({
//                 message: 'Accès autorisé',
//             });
//         });
//     } catch (error) {
//         // En cas d'erreur lors de la vérification du token
//         res.status(401).json({
//             message: 'Token invalide',
//         });
//     }
// };







module.exports = {
	register,
	login,
	
}


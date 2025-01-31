import express from "express";
import { connection } from '../connectionDB.mjs';

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
        return;
    }
    console.log('Connecté à la base de données');
})

const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM invoices', (err, result) => {
      if(err){
        console.error("Erreur de l'affichage des données :", err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
      res.send(result);
    })
})

router.post('/', (req, res) => {
    res.send({ data: `User created` })
  }
)

router.put('/', (req, res) => {
    res.send({ data: `User updated` })
  }
)

router.delete('/', (req, res) => {
    res.send({ data: `User deleted` })
  }
)

export default router;
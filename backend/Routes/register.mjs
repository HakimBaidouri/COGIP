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
    res.send({ data: `Here is your data` });
    }
)

router.post('/', (req, res) => {
    const {first_name, role_id, last_name, email, password, created_at, updated_at} = req.body;

    if (!first_name || !role_id || !last_name || !email || !password || !created_at || !updated_at) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    try {
      connection.query('INSERT INTO users (first_name, role_id, last_name, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',[first_name, role_id, last_name, email, password, created_at, updated_at])

      res.status(200).json({message: 'Utilisateur créé avec succès'})
    } catch (error) {
      return res.status(500).json({message: 'Erreur serveur'});
    }
  }
)

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, role_id, last_name, email, password, updated_at } = req.body;

  if (!first_name || !role_id || !last_name || !email || !password || !updated_at) {
      return res.status(400).json({ message: 'Tous les champs sont requis pour la mise à jour' });
  }

  try {
    connection.query(
      'UPDATE users SET first_name = ?, role_id = ?, last_name = ?, email = ?, password = ?, updated_at = ? WHERE id = ?',
      [first_name, role_id, last_name, email, password, updated_at, id],
      (err, results) => {
        if (err) {
          console.error('Erreur lors de la mise à jour :', err);
          return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: 'Erreur serveur' });
  }
})

router.delete('/', (req, res) => {
  const { id } = req.params;

  try {
    connection.query(
        'DELETE FROM users WHERE id = ?',
        [id],
        (err, results) => {
          if (err) {
            console.error('Erreur lors de la suppression :', err);
            return res.status(500).json({ message: 'Erreur serveur' });
          }

          if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
          }

          res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
        }
    );
  } catch (error) {
    return res.status(500).json({ message: 'Erreur serveur' });
  }
})

export default router;
import express from "express";
import { connection } from '../connectionDB.mjs';
import { convertToMySqlDate } from "../utils/convertDateToMySQLDate.mjs";

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données');
    return;
  }
  console.log('Connecté à la base de données');
})

const router = express.Router();

//get all Companies
router.get('/', (req, res) => {
  const selectAllCompaniesQuery = 'SELECT * FROM companies';
  connection.query(selectAllCompaniesQuery, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Error occurred while retrieving Companies."
      });
    }
    res.status(200).json(results);

  })
}
)

//get a Company by Id

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const selectCompanyByIdQuery = 'SELECT * FROM companies WHERE id = ?';
  connection.query(selectCompanyByIdQuery, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Error occurred while retrieving the company."
      });
    }
    if (results.length === 0) {
      return res.status(404).json({
        error: "Company not found."
      })
    }
    res.status(200).json(results[0]);
  })
}) ;




// Create a company
router.post('/', (req, res) => {
  const { name, email, phone } = req.body;
  
  //Verify required fields
  if (!name || !email || !phone) {
    return res.status(400).json({
      error: "name, email and phone are required !"
    })
  }
  
  //verify if the email already exist
  const checkEmailRequest = 'SELECT email FROM companies WHERE email = ?';
  connection.query(checkEmailRequest,[email],(err, result)=>{
    if (err) {
      return res.status(500).json({
        error: "Error occurred while select the email."
      });
    }
    if(result.length>0) {
      return res.status(409).json ({
        error : "Conflict, Another company has already this email"
      })
    }
    
    //if the email doesn't exist insert the company
    const insertCompanyQuery = 'INSERT INTO companies (name, email, phone) VALUES (?,?,?,?)';
    connection.query(insertCompanyQuery, [name, email, phone], (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Error occurred while creating the company."
        });
      }
      res.status(200).json({
        message: "The company has been successfully created",
        CompanyId: result.insertId
      })
    })
  })
}) ;

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const {name, email, phone} =req.body;

  //Verify required fields
  if (!name || !email || !phone) {
    return res.status(400).json({
      error : "name, email, phone are required!"
    })
  }

  //Very if the id exists in the database
  const selectIdQuery = 'SELECT id FROM companies WHERE email= ?';
  connection.query(selectIdQuery,[email], (err, result)=>{
    if(err) {
      return res.status(500).json({
        error : 'Error during searching the id in the database'
      })
    }

    if (result.length===0) {
      return res.status(404).json({
        error :'Company not found'
      })
    }
  })

  //Very if the email  already attribute to another Company
  const selectEmailQuery = 'SELECT email FROM companies WHERE email = ? and id != ?';
  connection.query(selectEmailQuery,[email,id],(err, result)=>{
    if (err) {
      return res.status(500).json({
        error: "Error occured while selecting the email"
      })
    }
    if(result.length>0) {
      return res.status(409).json({
        error: 'The email is already exist'
      })
    }
    //if the email doesn't attribute to another Company, the Company can be updated
    const updateCompanyQuery = 
    `UPDATE 
    companies 
    SET name = ?, email = ?, phone = ?, updated_at= ? 
    WHERE id = ?`;
    connection.query(
      updateCompanyQuery,
      [name, email, phone, convertToMySqlDate(Date.now()), id],
      (err)=>{
        if (err) {
          console.log(err)
          return res.status(500).json({
            error: "Error occured during updating the Company"
          })
        }

        res.status(200).json({
          message : 'The Company has been successfully updated',
          updatedId : id
        })

      }
    )
  })


}
)

//Delete a company
router.delete('/:id', (req, res) => {
  const {id} = req.params;
    //Very if the id exists in the database
    const selectIdQuery = 'SELECT id FROM companies WHERE id= ?';
    connection.query(selectIdQuery,[id], (err, result)=>{
      if(err) {
        return res.status(500).json({
          error : 'Error during searching the id in the database'
        })
      }
  
      if (result.length===0) {
        return res.status(404).json({
          error :'Company not found'
        })
      }
    })

  const deleteContactQuery = 'DELETE FROM companies WHERE id= ?';
  
  connection.query(deleteContactQuery,[id], (err)=> {
    if (err) {
      return res.status(500).json({
        error: 'Error occured while deleting the company'
      })
    } else {

      res.status(200).json({
        message : 'The company has been delete successfully'
      })
    }

  })

}
)

export default router;
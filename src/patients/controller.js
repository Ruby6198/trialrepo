const pool = require('../db');

const queries = require ('./queries');
const getPatientsDetails = (req,res) => {
    pool.query(queries.getPatientsDetails,(error,results) =>{
        if (error) throw error;
        res.status(200).json (results.rows);
    });

};

const getPatientsDetailsById = (req,res) => {
    const patientid = parseInt (req.params.patientid);
    pool.query(queries.getPatientsDetailsById,[patientid], (error,results) =>{
        if (error) throw error;
        res.status(200).json (results.rows);
    });
};

const addPatient = (req,res) => {

    const {patientid,name, gender, age,dob, address, phoneno} = req.body;
    const email = parseInt(req.params.email)
    //check if email exists
    const checkEmail = checkEmail.find((el) => el.id === id);
    pool.query(queries.checkEmail, [email], (error,results) =>{
        if (!email) {
            return res.status(404).json({
                status: "Fail",
                Message: "Not Found", 
            })
            
        }
        else{
            throw error;  
        }
    })

        //add student to db

        pool.query(queries.addPatient, [patientid,name, gender, age,dob, address, phoneno, email], (error,results) => {
            if (error) {
                console.log (error);
                throw error;
            }
        
            res.status(200).json({
                msg: "data added",
                data: results.rows[0]
            })
              
        }) 
   
};
 const updatePatientDetails = (req,res) =>{
 let patientid = parseInt(req.params.patientid)
 const {name, gender, age, dob, address, phoneno, email} = req.body

 pool.query(queries.updatePatientDetails,[name, gender, age, dob, address, phoneno, email, patientid], (error,results) =>{
    if (error){
        throw error
    }

    res.json({
        data: "Updated successfully"
    })
 })
 }

const deletePatient = (req,res) =>{
    const patientid = parseInt(req.params.patientid)

    pool.query(queries.deletePatient,[patientid],(error,results)=>{
        if (error){
            throw error
        }

        res.json({
            msg: `Patients with id ${patientid} deleted successfully`
        })
    })

}
module.exports = {
    getPatientsDetails,
    getPatientsDetailsById,
    addPatient,
    deletePatient,
    updatePatientDetails,
}
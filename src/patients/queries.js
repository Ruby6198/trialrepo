const getPatientsDetails = "SELECT * FROM master_patient";
const getPatientsDetailsById = "SELECT * FROM master_patient WHERE patientid = $1"; 
const checkEmail = "SELECT s FROM master_patient WHERE s.email =$1";
const addPatient = "INSERT INTO master_patient (patientid,name, gender, age, dob, address, phoneno, email) VALUES ($1, $2, $3, $4, $5, $6,$7, $8) RETURNING * ";
const updatePatientDetails = "UPDATE master_patient SET name = $1, gender = $2, age = $3, dob = $4, address = $5, phoneno = $6, email = $7 WHERE patientid= $8";
const deletePatient = "DELETE FROM master_patient WHERE patientid = $1"

module.exports = {
    getPatientsDetails,
    getPatientsDetailsById,
    checkEmail,
    addPatient,
    updatePatientDetails,
    deletePatient
}
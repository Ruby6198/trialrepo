const { Router } = require ('express');
const controller = require ('./controller');
const router = Router();

router.get ("/",controller.getPatientsDetails);
// ("/",(req,res) => {
//     res.send ("using api");
// });
router.get("/:patientid", controller.getPatientsDetailsById);
router.post("/", controller.addPatient);
router.put("/:patientid", controller.updatePatientDetails);
router.delete("/:patientid",controller.deletePatient);

module.exports = router;
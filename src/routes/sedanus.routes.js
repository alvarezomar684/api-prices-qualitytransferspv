const {Router} = require("express");
const {getAllsedanus, getsedanusById, createsedanus, updatesedanus, deletesedanus} = require("../controllers/sedanus.controller");


const router = Router();

//GET -> Obtener todos los registros
router.get("/sedanus", getAllsedanus);

//GET -> Obtener un registro por id
router.get("/sedanus/:id", getsedanusById); //como se espera un parametro se utiliza los :

//POST -> Agregar un registro
router.post("/sedanus", createsedanus);

//UPDATE -> Actualizar un registro
router.put("/sedanus/:id", updatesedanus);

//DELETE -> Borrar un registro
router.delete("/sedanus/:id", deletesedanus);

module.exports = router;
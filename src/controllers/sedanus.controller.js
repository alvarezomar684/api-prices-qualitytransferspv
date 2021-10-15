const { request } = require("../app");
const sedanusService = require("../services/sedanus.services")

const getAllsedanus = async (req, res, next) => {
  try{
    const sedanus = await sedanusService.getAll();
    res.json(sedanus);
  } catch(error) {
    next(error);
  }
}

const getsedanusById = async (req, res, next) => {
  try{
    const {id} = req.params;
    const sedanus = await sedanusService.getById(id);    
    return res.json(sedanus);    
  } catch(error) {
    next(error);
  }
}

const createsedanus = async (req, res, next) => {
  try{
    const {destinations, prices} = req.body;
    const newSedanUs = {
      destinations, 
      prices
    }
    const sedanus = await sedanusService.create(newSedanUs);    
    return res.json(sedanus);    
  } catch(error) {
    next(error);
  }
}

const updatesedanus = async (req, res, next) => {
  const {id} = req.params;
  try{
    const {destinations, prices} = req.body;
    const updateSedanUs = {
      destinations, 
      prices
    }
    const sedanus = await sedanusService.update(updateSedanUs, id);        
    if(sedanus && sedanus[0]){
      return res.json({message: "No Se ha actualizado el registro en el sistema"});
    }
    return res.json({message: "Se ha podido actualizar el registro en el sistema"});
  } catch(error) {
    next(error);
  }
}

const deletesedanus = async (req, res, next) => {
  const {id} = req.params;
  try{      
    const deleted = await sedanusService.delete(id);        
    if(deleted){
      return res.json({message: "Se ha eliminado el registro en el sistema"});
    }
    return res.json({message: "No se ha podido eliminar el registro en el sistema"});
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getAllsedanus,
  getsedanusById,
  createsedanus,
  updatesedanus,
  deletesedanus
}
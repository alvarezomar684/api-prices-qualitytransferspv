const {sedanus} = require('../models')

class sedanusService{
  static async getAll() {
    try{
      let results = await sedanus.findAll();
      return results;
    } catch(error) {
      throw(error);
    }
  }

  static async getById(id) {
    try{
      let results = await sedanus.findByPk(id);
      if(results){
        return results;
      }
      return {};
    } catch(error) {
      throw(error);
    }
  }

  static async create(newSedanUs) {
    try{
      let results = await sedanus.create(newSedanUs);
      return results;
    } catch(error) {
      throw(error);
    }
  }

  static async update(updateSedanUs, id) {
    try {
      let result = await sedanus.update(updateSedanUs, {where: {id}});
      if(result[0] === 0){
        return false;
      }
      return true; // --> [0] ó [1]
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try{
      let results = await sedanus.destroy({where: {id}});
      return results;
    } catch(error) {
      throw(error);
    }
  }
}

module.exports = sedanusService;
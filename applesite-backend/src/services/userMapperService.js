/* eslint-disable no-underscore-dangle */


module.exports = function userMapperService() {
  function dtoToEntity(dto) {
    return {
      _id: dto._id,
      roles: dto.roles,
      name: dto.name,
      email: dto.email,
    };
  }

  function EntitytoDTO(entity) {
    return {
      _id: entity._id,
      roles: entity.roles,
      name: entity.name,
      email: entity.email,
    };
  }

  return { dtoToEntity, EntitytoDTO };
};

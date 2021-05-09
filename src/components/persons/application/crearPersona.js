/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonsRepository')} obj.PersonsRepository
 */
export default ({ PersonsRepository }) => {
  return async ({ name, number }) => {
    const nuevaPersona = {
      name: name,
      number: number
    }
    return await PersonsRepository.add(nuevaPersona)
  }
}

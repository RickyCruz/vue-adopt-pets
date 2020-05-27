export default {
  // addPet: (context, pet) => {
  //   context.commit('appendPet', pet)
  // }
  // Popular way to use
  addPet: ({ commit }, playload) => {
    commit('appendPet', playload)
  }
}

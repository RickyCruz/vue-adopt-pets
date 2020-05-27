<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="pet-name-group" label="Pet's Name:" label-for="pet-name">
        <b-form-input
          id="pet-name"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group id="pet-species-group" label="Species:" label-for="pet-species">
        <b-form-select id="pet-species" :options="['cats', 'dogs']" required v-model="formData.species" />
      </b-form-group>

      <b-form-group id="pet-age-group" label="Pet's Age:" label-for="pet-age">
        <b-form-input
          id="pet-age"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },

  methods: {
    ...mapActions([
      'addPet'
    ]),

    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },

    handleSubmit () {
      const { species, age, name } = this.formData

      const payload = {
        species,
        pet: {
          name,
          age
        }
      }

      this.addPet(payload)

      // Reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>

<template>
  <div>
    <h1><span class="text-capitalize">{{ species }}</span> for Adoption</h1>

    <b-table striped hover :items="pets">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>

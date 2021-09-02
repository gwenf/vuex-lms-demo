<template>
  <div class="home">
    <h1>Dashboard</h1>

    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
  },
  computed: {
    ...mapState('users', [
      'users',
    ]),
  },
  methods: {
    ...mapActions('users', [
      'getUsers',
    ]),
  },
  mounted () {
    this.getUsers()
    // this.$store.dispatch('users/getUsers')
  }
}
</script>

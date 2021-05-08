<template>
  <v-snackbar v-model="show" :color="color" top right>
    {{ message }}
    <!-- <v-btn text @click="show = false">Close</v-btn> -->
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'Toast/showMessage') {
        this.message = state.Toast.content
        this.color = state.Toast.color
        this.show = true
        // this.close()
      }
    })
  },

  methods: {
    close() {
      setTimeout(() => {
        this.show = false
      }, 3000)
    },
  },
}
</script>

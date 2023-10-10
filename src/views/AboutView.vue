<script>
  import { mapState, mapActions } from "vuex"

  export default {
    computed: {
      ...mapState(['masukFeature'])
    },
    methods: {
      ...mapActions(['masukFeature']),
      daftar(){
        this.$router.push({ path: '/daftar' })
      },
      masukAct(){
        this.$store.dispatch('masukFeature/masuk')
      }
    }
  }

</script>

<template>
  <div>
    <div>
      Username
    </div>
    <div>
      <input v-model="masukFeature.username"/>
    </div>
    <div>
      Password
    </div>
    <div>
      <input type="password" v-model="masukFeature.password"/>
    </div>
    <div>
      <button @click="masukAct">masuk</button>
    </div>
    <div>
      Belum punya akun ? 
      <a style="color: hsla(160, 100%, 37%, 1);" @click="daftar">Daftar</a>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

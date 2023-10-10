<script>

    import { mapState, mapActions } from 'vuex';
    export default {
        name: "DaftarFeature",
        computed: {
            ...mapState(['daftarFeature'])
        },
        methods: {
            ...mapActions(['daftarFeature']),
            masuk(){
                this.$router.go(-1)
            }
        }
    }

</script>

<template>
  <div>
    <div>
      Nama Lengkap
    </div>
    <div>
      <input v-model="daftarFeature.namaLengkap"/>
    </div>
    <div>
      Username
    </div>
    <div>
      <input v-model="daftarFeature.username"/>
    </div>
    <div>
      Password
    </div>
    <div>
      <input type="password" v-model="daftarFeature.password"/>
    </div>
    <div>
      <button @click="$store.dispatch('daftarFeature/daftar')">Daftar</button>
    </div>
    <div>
      Sudah punya akun ? 
      <a style="color: hsla(160, 100%, 37%, 1);" @click="masuk">Masuk</a>
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

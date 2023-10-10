<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: "App",
    computed: {
      ...mapState(['berandaFeature'])
    },
    methods: {
      ...mapActions(['berandaFeature']),
    },
    mounted(){
      setTimeout(() => {
        this.$store.dispatch('berandaFeature/getData')
      }, 200)

      console.log("local = " + localStorage.getItem('id_pengguna'))
    }
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Selamat Datang {{ berandaFeature.id_pengguna === null ? '' : berandaFeature.nama_lengkap }}</h1>
      </div>

      <nav>
        <RouterLink to="/">Beranda</RouterLink>
        <RouterLink :to="berandaFeature.id_pengguna === null ? '/masuk' : '/profil'">
          {{
            berandaFeature.id_pengguna === null ?
              "Masuk" : "Profil"
          }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
}
</style>

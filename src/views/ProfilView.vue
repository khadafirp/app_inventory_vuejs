<script>

    import { mapState, mapActions } from 'vuex'

    export default {
        name: ' ProfileView',
        computed: {
            ...mapState(['profilFeature'])
        },
        methods: {
            ...mapActions(['profilFeature']),
            getFile(data){
                this.profilFeature.path_file = data.target.files[0]
            },
            openFile(){
                window.open(this.profilFeature.endpoint + '/download/' + this.profilFeature.path_file)
            }
        },
        mounted(){
            this.$store.dispatch('profilFeature/getData')
        }
    }

</script>

<template>
    <div>
      <div>
        Nama Lengkap
      </div>
      <div>
        <input v-model="profilFeature.nama_lengkap"/>
      </div>
      <div>
        Username
      </div>
      <div>
        <input v-model="profilFeature.username"/>
      </div>
      <div>
        Password
      </div>
      <div>
        <input v-model="profilFeature.password"/>
      </div>
      <div>
        Tanggal Lahir
      </div>
      <div>
        <input type="date" v-model="profilFeature.tanggal_lahir"/>
      </div>
      <div>
        Alamat
      </div>
      <div>
        <textarea v-model="profilFeature.alamat">Alamat</textarea>
      </div>
      <div>
        Upload File
      </div>
      <div>
        <input type="file" @change="getFile"/>
      </div>
      <div v-if="profilFeature.path_file != ''">
        <div>
            Download File
        </div>
        <div @click="openFile">
            <a>
                {{ profilFeature.path_file }}
            </a>
        </div>
      </div>
      <div style="margin-top: 8px;">
        <button @click="$store.dispatch('profilFeature/editAkun')">Ubah Profil</button>
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
  
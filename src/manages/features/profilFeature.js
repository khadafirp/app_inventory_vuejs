import axios from "axios"
import VueSweetalert2 from 'vue-sweetalert2'

export default {
    namespaced: true,
    state: {
        id_pengguna: localStorage.getItem('id_pengguna'),
        nama_lengkap: '',
        username: '',
        password: '',
        tanggal_lahir: '',
        alamat: '',
        path_file: '',
        nama_file: '',
        endpoint: 'http://localhost:8000/api'
    },
    mutations: {

        getData(state){
            var data = {
                id_pengguna: state.id_pengguna
            }
            axios.post(state.endpoint + '/profil', data).then((response) => {
                if(response.data != null){
                    state.nama_lengkap = response.data.data.nama_lengkap
                    state.username = response.data.data.username
                    state.password = response.data.data.password
                    state.tanggal_lahir = response.data.data.tanggal_lahir
                    state.alamat = response.data.data.alamat
                    state.path_file = response.data.data.path_file
                }
            })
        },

        editAkun(state){
            var formData = new FormData();
            formData.append('id_pengguna', state.id_pengguna)
            formData.append('nama_lengkap', state.nama_lengkap)
            formData.append('username', state.username)
            formData.append('password', state.password)
            formData.append('tanggal_lahir', state.tanggal_lahir)
            formData.append('alamat', state.alamat)
            formData.append('path_file', state.path_file)
            formData.append('nama_file', '')

            axios.post(state.endpoint + '/edit-akun', formData).then((response) => {
                console.log(response.data)
                if(response.data != null){
                    new VueSweetalert2('Berhasil')
                }
            })
        },

        downloadFile(state){
            axios.get(state.endpoint + "/download/" + state.path_file).then((response) => {
                const blob = new Blob([response.data], { type: 'application/pdf' })
                const link = document.createElement('a')
                link.href = URL.createObjectURL(blob)
                link.download = "uploads/" + state.path_file
                link.click()
                URL.revokeObjectURL(link.href)
            })
        }

    },
    actions: {
        getData({commit}){
            commit('getData')
        },
        editAkun({commit}){
            commit('editAkun')
        },
        downloadFile({commit}){
            commit('downloadFile')
        }
    }
}
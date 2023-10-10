import axios from 'axios'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        namaLengkap: '',
        username: '',
        password: '',
        validate: false,
        endpoint: 'http://localhost:8000/api/'
    },
    mutations: {
        daftar(state){
            var param = {
                nama_lengkap: state.namaLengkap,
                username: state.username,
                password: state.password,
                tanggal_lahir: "",
                alamat: '',
                path_file: '',
                nama_file: ''
            }
            if(
                state.namaLengkap != '' &&
                state.username != '' &&
                state.password != '' 
            ){
                axios.post(state.endpoint + 'daftar', param).then((response) => {
                    console.log(response.data)
                    if(response.data != null){
                        router.back()
                    }
                })
            }        
        }
    },
    actions: {
        daftar({commit}){
            commit('daftar')
        }
    }
}
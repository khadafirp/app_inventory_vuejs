import Axios from 'axios'

export default {
    namespaced: true,
    state: {
        id_pengguna: localStorage.getItem('id_pengguna'),
        nama_lengkap: '',
        endpoint: 'http://localhost:8000/api'
    },
    mutations: {
        getData(state){
            var data = {
                id_pengguna: state.id_pengguna
            }
            Axios.post(state.endpoint + "/profil", data).then((response) => {
                console.log(response.data)
                if(response.data != null){
                    state.nama_lengkap = response.data.data.nama_lengkap
                }
            })
        }
    },
    actions: {
        getData({commit}){
            commit('getData')
        }
    }
}
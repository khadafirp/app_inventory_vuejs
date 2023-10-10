import Axios from 'axios'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        username: '',
        password: '',
        endpoint: 'http://localhost:8000/api'
    },
    mutations: {
        masuk(state){
            var data = {
                username: state.username,
                password: state.password
            }
            Axios.post(state.endpoint + "/masuk", data).then((response) => {
                console.log(response.data)
                if(response.data.status === true){
                    localStorage.setItem('id_pengguna', response.data.data.id_pengguna)
                    router.push({path: '/'})
                }
            })
        }
    },
    actions: {
        masuk({commit}){
            commit('masuk')
        }
    }
}
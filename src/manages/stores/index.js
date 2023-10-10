import { createStore } from 'vuex'
import daftarFeature from '../features/daftarFeature'
import masukFeature from '../features/masukFeature'
import berandaFeature from '../features/berandaFeature'

export default createStore({
    modules: {
        daftarFeature,
        masukFeature,
        berandaFeature
    }
})
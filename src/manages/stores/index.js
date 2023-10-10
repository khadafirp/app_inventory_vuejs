import { createStore } from 'vuex'
import daftarFeature from '../features/daftarFeature'
import masukFeature from '../features/masukFeature'
import berandaFeature from '../features/berandaFeature'
import profilFeature from '../features/profilFeature'

export default createStore({
    modules: {
        daftarFeature,
        masukFeature,
        berandaFeature,
        profilFeature
    }
})
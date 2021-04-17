import {createStore} from 'vuex'
import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character';

export default createStore({
    state: {
        characters: [],
    },
    mutations: {
        SET_CHARACTERS(state, payload) {
            state.characters = payload;
        },
    },
    actions: {
        fetchCharacters(state) {
            return axios.get(`${baseURL}`)
                .then(({data}) => {
                    state.commit('SET_CHARACTERS', data.results);

                })
                .catch(error => console.log(error));
        }
    },
    getters: {
        getCharacters: state => state.characters,
    }
})

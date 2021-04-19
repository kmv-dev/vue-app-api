import {createStore} from 'vuex'
import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character/';

export default createStore({
    state: {
        characters: [],
        count: 0,
    },
    mutations: {
        SET_CHARACTERS(state, payload) {
            state.characters = payload;
        },
        SET_COUNT(state, payload) {
            state.count = payload
        }
    },
    actions: {
        fetchCharacters(state, page) {
            return axios.get(`${baseURL}`, {
                params: {
                    page
                }
            })
                .then(({data}) => {
                    state.commit('SET_CHARACTERS', data.results)
                    state.commit('SET_COUNT', data.info.count)
                })
                .catch(error => console.log(error));
        },
        searchCharacters(state, value) {
            return axios.get(`${baseURL}?name=${value}`)
                .then(({data}) => {
                    state.commit('SET_CHARACTERS', data.results)
                    state.commit('SET_COUNT', data.info.count)
                })
                .catch(error => console.log(error));
        },
        filterCharacters(state, value) {
            return axios.get(`${baseURL}?gender=${value}`)
                .then(({data}) => {
                    state.commit('SET_CHARACTERS', data.results)
                    state.commit('SET_COUNT', data.info.count)
                })
                .catch(error => console.log(error));
        },
    },
    getters: {
        getCharacters: state => state.characters,
    }
})

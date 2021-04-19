<template>
    <div class="main">
        <el-input placeholder="Search for a character..." v-model="search" class="input-with-select main__input">
            <template #prepend>
                <el-select v-model="filter" placeholder="Gender filter" class="main__select">
                    <el-option label="female" value="female"></el-option>
                    <el-option label="male" value="male"></el-option>
                    <el-option label="genderless" value="genderless"></el-option>
                    <el-option label="unknown" value="unknown"></el-option>
                    <el-option label="no filter" value=""></el-option>
                </el-select>
            </template>
        </el-input>
        <el-pagination
            class="main__pagination"
            background
            layout="prev, pager, next"
            v-model:currentPage="currentPage"
            :total="count"
            :page-size="20"
            @current-change="updatePage"
            >
        </el-pagination>
        <div class="main__inner">
            <Card v-for="character in characters" :key="character.id" :character="character"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import {mapState} from "vuex";

export default {
    name: 'Main',
    components: {
        Card,
    },
    data() {
        return {
            currentPage: 1,
            search: '',
            filter: ''
        }
    },
    computed: {
        ...mapState(['characters','count'])
    },
    watch: {
        search(value) {
            this.searchCharacter(value)
        },
        filter(value) {
            this.filterCharacter(value)
        }
    },
    methods: {
        updatePage(currentPage) {
            this.currentPage = currentPage
            this.fetchCharacters()
        },
        fetchCharacters() {
            this.$store.dispatch('fetchCharacters', this.currentPage)
        },
        searchCharacter(value) {
            this.$store.dispatch('searchCharacters', value)
        },
        filterCharacter(value) {
            this.$store.dispatch('filterCharacters', value)
        }
    },
    created() {
        this.fetchCharacters()
    },
}
</script>

<style scoped lang="scss">
    .main {
        padding: 0 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__inner {
            display: flex;
            flex-wrap: wrap;
        }
        &__pagination {
            margin-bottom: 5px;
        }
        &__input {
            max-width: 500px;
            margin-bottom: 15px;
        }
        &__select {
            width: 150px;
        }
    }
</style>

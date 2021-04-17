<template>
    <div class="main">
        <el-pagination
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
        }
    },
    computed: {
        ...mapState(['characters','count'])
    },
    methods: {
        updatePage(currentPage) {
            this.currentPage = currentPage
            this.fetchCharacters()
        },
        fetchCharacters() {
            this.$store.dispatch('fetchCharacters', this.currentPage)
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
    }
</style>

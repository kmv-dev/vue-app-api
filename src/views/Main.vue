<template>
    <div class="main">
        <div class="main__inner">
            <Card v-for="character in characters" :key="character.id" :character="character"/>
        </div>
        <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
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
    computed: {
        ...mapState(['characters'])
    },
    created() {
        this.$store.dispatch('fetchCharacters')
    }
}
</script>

<style scoped lang="scss">
    .main {
        display: flex;
        flex-direction: column;
        &__inner {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>

<template>
  <div class="favorites">
    <div class="favorites__inner">
        <Card v-for="character in favorites" :key="character.id" :character="character" @click="fetchFavorites"/>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
    name: 'Favorites',
    components: {
        Card
    },
    data() {
        return {
            favorites: [],
        }
    },
    methods: {
        fetchFavorites() {
            this.favorites = JSON.parse(localStorage.getItem('favorites'))
        }
    },
    mounted() {
        this.fetchFavorites()
    }
}
</script>

<style scoped lang="scss">
    .favorites {
        padding: 0 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &__inner {
            display: flex;
            flex-wrap: wrap;
    }
}
</style>
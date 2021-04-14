<template>
    <div class="main">
        <Card/>
    </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
    name: 'Main',
    components: {
        Card
    }
}
</script>

<style scoped lang="scss">
    .main {
        display: flex;
        flex-wrap: wrap;
    }
</style>

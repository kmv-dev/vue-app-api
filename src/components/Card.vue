<template>
    <div class="card">
        <h2 class="card__title">{{ character.name }}</h2>
        <div class="card__img">
            <img :src="character.image" alt="image">
        </div>
        <div class="card__action">
            <span>{{ character.gender }}</span>
            <div>
                <div v-if="allowSave" class="card__btn card__btn--favorites" @click="saveItem"></div>
                <div v-if="allowDelete" class="card__btn card__btn--delete" @click="deleteItem"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    data() {
        const isSaved =
            !!JSON.parse(localStorage.getItem('favorites') || '[]')
                .find(character => character.name === this.character.name)

        return {
            allowDelete: isSaved,
            allowSave: !isSaved,
        }
    },
    props: {
        character: {
            type: Object,
            required: true
        },
    },
    methods: {
        saveItem() {
            let items = JSON.parse(localStorage.getItem('favorites')) || [];
            items.push(this.character)
            localStorage.setItem('favorites', JSON.stringify(items))
            this.allowSave = false
            this.allowDelete = true
        },
        deleteItem() {
            let items = JSON.parse(localStorage.getItem('favorites'))
            items = items.filter(character => character.name !== this.character.name)
            localStorage.setItem('favorites', JSON.stringify(items))
            this.allowDelete = false
            this.allowSave = true
        },
    }
}

</script>

<style scoped lang="scss">
.card {
    position: relative;
    width: 230px;
    padding: 5px 15px 0;
    margin: 10px;
    border: 1px solid #f2f2f2;

    &__title {
        font-size: 16px;
    }

    &__img {
        img {
            width: 100%;
        }
    }

    &__action {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;

        div {
            display: flex;
        }
    }

    &__btn {
        width: 45px;
        height: 45px;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        &--favorites {
            background-image: url("../assets/icon/1.svg");
            opacity: 0.2;
        }

        &--delete {
            background-image: url("../assets/icon/2.png");
        }
    }
}
</style>

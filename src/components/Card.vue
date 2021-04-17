<template>
    <div class="card">
        <h2 class="card__title">{{ character.name }}</h2>
        <div class="card__img">
            <img :src="character.image" alt="image">
        </div>
        <div class="card__action">
            <span>{{ character.gender }}</span>
            <div>
                <div class="card__btn card__btn--favorites"></div>
                <div class="card__btn card__btn--delete"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        character: {
            type: Object,
            required: true
        }
    },
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
            width: 35px;
            height: 35px;
            margin: 5px;
            background-repeat: no-repeat;
            background-size: cover;
            transition: 0.2s ease-in-out;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }
            &--favorites {
                background-image: url("../assets/icon/favorites.svg");
            }
            &--delete {
                background-image: url("../assets/icon/delete.svg");
            }
        }
    }
</style>

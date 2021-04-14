<template>
    <header class="header">
        <div class="header__logo logo">
            <img src="@/assets/img/logo.png" alt="logo">
        </div>
        <nav class="header__nav">
            <router-link class="header__link" to="/">All</router-link>
            <router-link class="header__link" to="/favorites">Favorites</router-link>
        </nav>
    </header>
    <router-view/>
</template>

<style lang="scss" src="./scss/main.scss">

</style>

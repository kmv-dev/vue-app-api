<template>
    <header class="header">
        <nav class="header__nav">
            <router-link to="/">Все герои</router-link>
            <router-link to="/favorites">Любимые герои</router-link>
        </nav>
    </header>
    <router-view/>
</template>

<style lang="scss" src="./scss/main.scss">

</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Ana Sayfa</RouterLink>
                <RouterLink to="/single-player">Tek Oyunculu</RouterLink>
                <RouterLink to="/rules">Kurallar</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView class="router-view" />
</template>

<style>
@import "@/assets/base.css";
html,
body {
    padding: 0;
    margin: 0;
}

#app {
    width: 100%;
    margin: 0 auto;
    font-weight: normal;
    height: 100vh;
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

a {
    text-align: center;
    text-decoration: none;
    color: var(--color-purple);
    transition: 0.4s;
}

@media (hover: hover) {
    a:hover {
        background-color: var(--bg-purple);
    }
}

nav {
    font-size: 12px;
    text-align: center;
    border-right: 1px solid var(--color-purple);
}

nav a.router-link-exact-active {
    color: var(--color-bright-purple);
    background-color: var(--bg-purple);
}

nav a {
    display: inline-block;
    padding: 0 1rem;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    #app {
        display: grid;
        grid-template-columns: 1fr 5fr;
    }

    header {
        display: flex;
        place-items: center;
        width: 100%;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }

    nav {
        text-align: left;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>

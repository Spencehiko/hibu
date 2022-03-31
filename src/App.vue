<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
</script>

<template>
    <header>
        <h1 class="name">Hibu</h1>
        <div class="toggle-wrapper">
            <button class="toggle-button" v-if="!menuOpen" @click="menuOpen = true">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <button class="close-button" v-if="menuOpen" @click="menuOpen = false">
                X
            </button>
        </div>
    </header>
    <RouterView class="router-view" :class="{ 'menu-opened': menuOpen }" />
    <div class="wrapper" v-show="menuOpen">
        <nav>
            <RouterLink to="/" @click="menuOpen = false">Ana Sayfa</RouterLink>
            <RouterLink to="/single-player" @click="menuOpen = false">Tek Cihaz</RouterLink>
            <RouterLink to="/rules" @click="menuOpen = false">Kurallar</RouterLink>
        </nav>
    </div>
</template>

<style>
@import "@/assets/base.css";
html,
body {
    padding: 0;
    margin: 0;
    overflow: hidden;
}
#app {
    width: 100%;
    margin: 0 auto;
    font-weight: normal;
    height: 100vh;
}
a {
    text-decoration: none;
}
header {
    width: 100vw;
    height: 60px;
    background-color: var(--bg-purple);
}
.name {
    float: left;
    color: var(--color-bright-purple);
    margin: 5px 15px;
}
.wrapper {
    background: var(--bg-dark-purple);
    width: 100%;
    height: calc(100% - 60px);
    z-index: 10;
    position: absolute;
    top: 60px;
    left: 0;
}
.wrapper nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
}
.wrapper nav a {
    color: var(--color-bright-purple);
    font-weight: 600;
    font-size: 30px;
    transition: all 0.4s;
}
.wrapper nav a:hover {
    color: var(--color-purple);
}
.toggle-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}
.toggle-button {
    background: transparent;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
    float: right;
    outline: none;
    border: none;
    margin: 10px;
}
.toggle-button .bar {
    width: 30px;
    height: 3px;
    background-color: var(--color-bright-purple);
    margin: 5px;
    transition: 0.4s;
}
.toggle-button:hover .bar {
    background-color: var(--color-purple);
}
.close-button {
    background: transparent;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
    float: right;
    outline: none;
    border: none;
    margin: 7.5px 15px;
    font-size: 30px;
    font-weight: 800;
    color: var(--color-bright-purple);
}
.close-button:hover {
    color: var(--color-purple);
}
.router-view {
    padding: 20px 0;
    width: 100%;
    height: calc(100% - 60px);
    transition: all 0.4s;
}
.router-view.menu-opened {
    pointer-events: none;
    filter: blur(5px);
}
</style>

<script setup lang="ts">
</script>

<template>
    <div class="home-wrapper">
        <div class="home">
            <h1 class="title">Hibu oyununa hoş geldin</h1>
            <h3 class="explanation">Kuralları biliyor musun?</h3>
            <div class="buttons">
                <RouterLink to="/rules">HAYIR</RouterLink>
                <RouterLink to="/single-player">EVET!</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-wrapper {
    display: table-cell;
    width: 100vw;
    height: calc(100vh - 60px);
    vertical-align: middle;
    text-align: center;
}
.home {
    color: var(--color-bright-purple);
    display: inline-block;
    width: 100%;
}
.explanation {
    margin-top: 20px;
}
.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.buttons a {
    width: 200px;
    padding: 10px;
    border: 1px solid var(--color-purple);
    border-radius: 5px;
    background-color: var(--bg-purple);
    color: var(--color-bright-purple);
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.4s;
}
.buttons a:hover {
    background-color: var(--bg-bright-purple);
    color: var(--color-purple);
}
</style>
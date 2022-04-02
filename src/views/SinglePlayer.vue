<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';
import Rules from '@/components/singlePlayer/Rules.vue';
import Game from '@/components/singlePlayer/Game.vue';

const store = useSinglePlayer();
const { gameStarted } = storeToRefs(store);
</script>

<template>
    <div class="single-player">
        <Rules v-if="!gameStarted" />
        <Game v-else />
    </div>
</template>

<style scoped>
.single-player {
    color: var(--color-bright-purple);
    width: 100vw;
    height: calc(100vh - 60px);
    background: var(--bg-dark-purple);
}
</style>
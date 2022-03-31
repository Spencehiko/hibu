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
</style>
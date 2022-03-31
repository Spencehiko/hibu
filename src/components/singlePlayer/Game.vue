<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { teams, rules } = store;
</script>

<template>
    <div class="game">
        {{ rules }}
        {{ teams }}
    </div>
</template>

<style scoped>
</style>
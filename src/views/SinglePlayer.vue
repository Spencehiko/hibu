<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';
import Rules from '@/components/singlePlayer/Rules.vue';

const store = useSinglePlayer();
const { teams, cards, rules, gameStarted } = storeToRefs(store);
</script>

<template>
    <div class="single-player">
        <Rules v-if="!gameStarted" />
    </div>
</template>

<style scoped>
</style>
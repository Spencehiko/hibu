<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '../stores/singlePlayer';

const store = useSinglePlayer();
const { teams, cards, rules } = storeToRefs(store);
</script>

<template>
    <div class="single-player">
        
    </div>
</template>

<style scoped>
</style>
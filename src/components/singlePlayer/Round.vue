<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { cards, teams, rules, roundStarted, roundTeam, getRemainingCards, roundScore } = store;
const {maxScore, timeLimit} = rules;
</script>

<template>
    <div class="round">
        <div class="round-score">
            <h1 class="score">{{ roundScore }}</h1>
        </div>
        <div class="card">
            <h1 class="target">
                {{ cards[0].target }}
            </h1>
            <h2 class="forbidden" v-for="(forbidden, index) in cards[0].forbidden" :key="index">
                {{ forbidden }}
            </h2>
        </div>
        <div class="buttons">
            <button class="false">HİBU!</button>
            <button class="pass">PAS</button>
            <button class="true">DOĞRU</button>
        </div>
    </div>
</template>
<style scoped>

</style>
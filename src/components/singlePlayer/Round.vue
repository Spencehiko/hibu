<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { cards, teams, rules, roundStarted, roundTeam, getRemainingCards, roundScore } = store;
const { maxScore, timeLimit } = rules;
</script>

<template>
    <div class="round">
        <div class="round-score">
            <h1 class="time">120</h1>
            <h1 class="score">{{ roundScore }}</h1>
        </div>
        <div class="card">
            <h1 class="target">
                {{ cards[0].target }}
            </h1>
            <h2
                class="forbidden"
                v-for="(forbidden, index) in cards[0].forbidden"
                :key="index"
            >
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
.round {
    height: calc(100vh - 60px);
    width: 100vw;
}
.round-score {
    display: flex;
    padding: 0 20px;
    align-items: center;
    width: 100%;
}
.round-score .time {
    padding: 10px;
    font-size: 30px;
    font-weight: 700;
    background: var(--bg-dark-purple);
    color: var(--color-bright-purple);
    border: 3px solid var(--color-bright-purple);
    border-radius: 10px;
}
.round-score .score {
    margin-left: auto;
    width: 65px;
    height: 65px;
    font-size: 35px;
    font-weight: 700;
    background: var(--bg-dark-purple);
    color: var(--color-bright-purple);
    border: 3px solid var(--color-bright-purple);
    border-radius: 50%;
}
.card {
    margin-top: 100px;
}
</style>
<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { cards, endRound, nextCard } = store;
let { roundTime, roundScore } = storeToRefs(store);
function countDownTimer() {
    if (roundTime.value > 0) {
        setTimeout(() => {
            roundTime.value--;
            countDownTimer();
        }, 1000);
    } else {
        endRound();
    }
}
countDownTimer();
</script>

<template>
    <div class="round">
        <div class="round-score">
            <h1 class="time">{{ roundTime }}</h1>
            <h1 class="score">{{ roundScore }}</h1>
        </div>
        <div class="card">
            <h1 class="target">
                {{ cards[0].target.toLocaleUpperCase('tr') }}
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
            <button class="false" @click="nextCard(-1)">✘</button>
            <button class="pass" @click="nextCard(0)">PAS</button>
            <button class="true" @click="nextCard(1)">✔</button>
        </div>
    </div>
</template>
<style scoped>
.round {
    width: 50vw;
    padding: 0 20px;
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
    margin: 50px auto;
    padding: 0 20px;
    border: 1px solid var(--color-bright-purple);
    border-radius: 10px;
    padding: 20px;
    background: var(--bg-dark-purple);
}
.card .target {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-bright-purple);
    border-bottom: 1px solid var(--color-bright-purple);
    margin-bottom: 20px;
}
.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    min-width: 350px;
    padding: 0 20px;
    margin: 50px auto;
}
.buttons button {
    width: 100px;
    height: 100px;
    font-size: 2rem;
    border: 3px solid var(--color-bright-purple);
    border-radius: 10px;
    background: var(--bg-dark-purple);
    color: var(--color-bright-purple);
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.4s;
}
.buttons button.false {
    border-color: rgba(225, 0, 0, 0.7);
    color: rgba(225, 0, 0, 0.7);
}
.buttons button.false:hover {
    background-color: rgba(225, 0, 0, 0.7);
}
.buttons button.true {
    border-color: rgba(0, 185, 0, 0.7);
    color: rgba(0, 185, 0, 0.7);
}
.buttons button.true:hover {
    background: rgba(0, 185, 0, 0.7);
}
.buttons button:hover {
    background: var(--color-bright-purple);
    color: #fff;
}
@media screen and (max-width: 600px) {
    .round {
        width: 95vw;
    }
    .buttons {
        min-width: 0;
        padding: 0;
    }
}
</style>
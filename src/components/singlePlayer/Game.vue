<script setup lang="ts">
import { useSinglePlayer } from '@/stores/singlePlayer';
import { storeToRefs } from 'pinia';
import Round from '@/components/singlePlayer/Round.vue';

const store = useSinglePlayer();
const { teams, roundTeam } = store;
const { roundStarted } = storeToRefs(store);
</script>

<template>
    <div class="game">
        <div v-if="!roundStarted">
            <div class="score-board">
                <div class="team-score">
                    <div class="team-name">{{ teams[0].name }}</div>
                    <div class="team-score">{{ teams[0].score }}</div>
                </div>
                <div class="divider"></div>
                <div class="team-score">
                    <div class="team-name">{{ teams[1].name }}</div>
                    <div class="team-score">{{ teams[1].score }}</div>
                </div>
            </div>
            <h3>Anlatma Sırası: {{ teams[roundTeam].name }}</h3>
            <a class="start-round-btn" @click="roundStarted = true"
                >Turu başlat</a
            >
        </div>
        <div v-else>
            <Round />
        </div>
    </div>
</template>

<style scoped>
.game {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.score-board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    min-width: 350px;
    background: var(--bg-dark-purple);
    color: var(--color-bright-purple);
    padding: 0 20px;
    margin: 20px 0;
}
.team-score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.divider {
    width: 1px;
    height: 100%;
    background: var(--color-bright-purple);
}
.team-name {
    font-size: 1.5rem;
}
.start-round-btn {
    display: inline-block;
    margin-top: 20px;
}
</style>
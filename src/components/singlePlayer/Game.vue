<script setup lang="ts">
import { useSinglePlayer } from '@/stores/singlePlayer';
import { storeToRefs } from 'pinia';
import Round from '@/components/singlePlayer/Round.vue';

const store = useSinglePlayer();
const { startRound } = store;
const { teams, roundTeam, roundStarted } = storeToRefs(store);
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
            <h1 class="turn-title">Anlatma Sırası: {{ teams[roundTeam].name }}</h1>
            <a class="start-round-btn" @click="startRound"
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
    padding: 0 40px;
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
.turn-title {
    font-size: 2.5rem;
}
.start-round-btn {
    display: inline-block;
    margin-top: 20px;
}
</style>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { rules, gameStarted } = storeToRefs(store);
</script>

<template>
    <div class="game-rules">
        <div class="row">
            <div class="col-3">
                <label for="team1">Takım #1</label>
                <input type="text" id="team1" class="team-name" placeholder="Takım 1">
            </div>
            <div class="col-3">
                <label for="team2">Takım #2</label>
                <input type="text" id="team2" class="team-name" placeholder="Takım 2">
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label for="maxScore">Hedef Skor</label>
                <input type="number" id="maxScore" class="max-score" placeholder="30" min="1">
            </div>
            <div class="col-3">
                <label for="timeLimit">Zaman Limiti</label>
                <input type="number" id="timeLimit" class="time-limit" placeholder="Team 2" min="20">
            </div>
        </div>
    </div>
</template>

<style scoped>
.game-rules{
    display: flex;
    place-items: center;
    height: 100%;
}
.row{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.col-3{
    width: 50%;
}
</style>
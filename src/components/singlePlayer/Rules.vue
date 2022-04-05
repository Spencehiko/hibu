<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinglePlayer } from '@/stores/singlePlayer';

const store = useSinglePlayer();
const { startGame } = store;
const { teams, rules } = storeToRefs(store);
</script>

<template>
    <div class="game-rules">
        <div class="wrapper">
            <div class="row">
                <div class="col-3">
                    <label for="team1">Takım #1</label>
                    <input
                        v-model="teams[0].name"
                        type="text"
                        id="team1"
                        placeholder="Takım 1"
                    />
                </div>
                <div class="col-3">
                    <label for="team2">Takım #2</label>
                    <input
                        v-model="teams[1].name"
                        type="text"
                        id="team2"
                        placeholder="Takım 2"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="maxScore">Hedef Skor</label>
                    <input
                        v-model="rules.maxScore"
                        type="number"
                        id="maxScore"
                        placeholder="30"
                        min="1"
                    />
                </div>
                <div class="col-3">
                    <label for="maxTime">Zaman Limiti</label>
                    <input
                        v-model="rules.timeLimit"
                        type="number"
                        id="maxTime"
                        placeholder="60"
                        min="20"
                    />
                </div>
            </div>
            <div class="row">
                <a @click="startGame">OYUNA BAŞLA</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.game-rules {
    width: 100%;
    height: calc(100% - 20px);
    color: var(--color-bright-purple);
    display: flex;
    place-items: center;
}
.wrapper {
    margin: 50px 20%;
    padding: 50px 0;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    background: var(--bg-purple);
    color: var(--color-yellow);
    max-height: calc(100% - 160px);
}
.row {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 150px;
    justify-content: center;
    margin: 20px auto;
}
.col-3 {
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 0 2.5%;
}
.col-3 input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-purple);
    border-radius: 5px;
    background-color: var(--bg-purple);
    color: var(--color-bright-purple);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
}
.col-3 input:hover {
    background-color: var(--bg-bright-purple);
    color: var(--color-purple);
}
.col-3 label {
    margin-top: 20px;
}
.col-3 input:focus {
    outline: none;
}
</style>
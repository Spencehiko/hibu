import { defineStore } from 'pinia'
import cards from '@/datas/cards.json';

export const useSinglePlayer = defineStore({
  id: 'singlePlayer',
  state: () => ({
    teams: {
      team1: {
        name: 'Takım 1',
        score: 0,
      },
      team2: {
        name: 'Takım 2',
        score: 0,
      },
    },
    cards: cards,
    rules: {
      maxScore: 30,
      timeLimit: 60,
    },
    gameStarted: false,
  }),
  getters: {
  },
  actions: {
    startGame() {
      console.log('Game started');
      this.gameStarted = true;
    },
  },
  persist: true,
})
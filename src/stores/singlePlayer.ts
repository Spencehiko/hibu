import { defineStore } from 'pinia'
import cards from '@/datas/cards.json';

export const useSinglePlayer = defineStore({
  id: 'singlePlayer',
  state: () => ({
    teams: {
        team1: {
            name: 'Team 1',
            score: 0,
        },
        team2: {
            name: 'Team 2',
            score: 0,
        },
    },
    cards: cards,
    rules: {
        maxScore: 30,
        timeLimit: 120,
    },
    gameStarted: false,
  }),
  getters: {
  },
  actions: {
  },
  persist: true,
})
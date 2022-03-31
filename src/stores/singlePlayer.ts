import { defineStore } from 'pinia'
import cards from '@/datas/cards.json';
import alertify from 'alertifyjs';

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
      if (this.teams.team1.name.trim() === '' || this.teams.team2.name.trim() === '' || this.rules.maxScore.toString().trim() === '' || this.rules.timeLimit.toString().trim() === '') {
        alertify.error('Lütfen tüm alanları doldurunuz.', 2);
        return;
      }
      if (this.rules.maxScore < 1) {
        alertify.error('Skor limiti en az 1 olmalıdır.', 2);
        return;
      }
      if (this.rules.timeLimit < 20) {
        alertify.error('Süre limiti en az 20 saniye olmalıdır.', 2);
        return;
      }
      console.log('Game started');
      this.gameStarted = true;
    },
  },
  persist: true,
})
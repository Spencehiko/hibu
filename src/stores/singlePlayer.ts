import { defineStore } from 'pinia'
import cards from '@/datas/cards.json';
import alertify from 'alertifyjs';

interface Card {
  id: number;
  target: string;
  forbidden: string[];
}


export const useSinglePlayer = defineStore({
  id: 'singlePlayer',
  state: () => ({
    teams: [
      {
        name: 'Takım 1',
        score: 0,
      },
      {
        name: 'Takım 2',
        score: 0,
      },
    ],
    cards: cards as Card[],
    usedCards: [] as number[],
    rules: {
      maxScore: 30,
      timeLimit: 60,
    },
    gameStarted: false,
    roundStarted: false,
    roundTeam: 0,
    roundScore: 0,
  }),
  actions: {
    startGame() {
      if (this.teams[0].name.trim() === '' || this.teams[1].name.trim() === '' || this.rules.maxScore.toString().trim() === '' || this.rules.timeLimit.toString().trim() === '') {
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
      this.cards = this.cards.sort(() => Math.random() - 0.5);
      this.gameStarted = true;
    },
  },
  getters: {
    getRemainingCards(): Card[] {
      return this.cards.filter(card => !this.usedCards.includes(card.id));
    },
  },
  persist: true,
})
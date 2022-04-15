import { defineStore } from 'pinia'
import cardsData from '@/datas/cards.json';
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
    cards: [...cardsData] as Card[],
    usedCards: [] as number[],
    rules: {
      maxScore: 30,
      timeLimit: 60,
    },
    gameStarted: false,
    roundStarted: false,
    roundTeam: 0,
    roundScore: 0,
    roundTime: 60 as number,
    gameWinner: -1,
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
      this.cards = [...cardsData];
      this.cards = this.cards.sort(() => Math.random() - 0.5);
      this.roundTime = this.rules.timeLimit;
      this.gameStarted = true;
    },
    endGame() {
      this.gameStarted = false;
      this.roundStarted = false;
      this.roundTeam = 0;
      this.roundScore = 0;
      this.usedCards = [];
      this.teams[0].score = 0;
      this.teams[1].score = 0;
      this.teams[0].name = 'Takım 1';
      this.teams[1].name = 'Takım 2';
      this.rules.maxScore = 30;
      this.rules.timeLimit = 60;
      this.gameWinner = -1;
    },
    startRound() {
      this.roundStarted = true;
      this.roundScore = 0;
      this.roundTime = this.rules.timeLimit;
    },
    endRound() {
      this.teams[this.roundTeam].score += this.roundScore;
      if(this.teams[this.roundTeam].score >= this.rules.maxScore) {
        alertify.success('Oyun bitti. Kazanan takım: ' + this.teams[this.roundTeam].name, 2);
        this.gameWinner = this.roundTeam;
      } 
      this.roundStarted = false;
      this.roundTeam = 1 - this.roundTeam;
      this.roundScore = 0;
      this.nextCard(0);
    },
    nextCard(status: number) {
      if (status === 1) {
        this.roundScore++;
      } else if (status === -1) {
        this.roundScore--;
      }
      if(this.cards.length === 1) {
        this.cards = [...cardsData];
        this.usedCards = [];
      } else {
        this.usedCards.push(this.cards[0].id);
        this.cards.shift(); 
      }    
    }
  },
  getters: {
    getRemainingCards(): Card[] {
      return this.cards.filter(card => !this.usedCards.includes(card.id));
    },
  },
  persist: true,
})
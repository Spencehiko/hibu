<script setup lang="ts">
</script>

<template>
    <div class="rules">
        <h1 class="title">OYNANIŞ</h1>
        <div class="rules-cards">
            <div class="rule-card">
                <h3 class="rule-title">Takımını Kur</h3>
                <img src="@/assets/team.svg" alt="Takım" />
            </div>
            <div class="rule-card">
                <h3 class="rule-title">Konuşma Ortamını Ayarla</h3>
                <img src="@/assets/talk.svg" alt="Ortam" />
            </div>
            <div class="rule-card">
                <h3 class="rule-title">Ekrana Gelen Kartı Anlat</h3>
                <img src="@/assets/card.svg" alt="Oyun" />
            </div>
            <div class="rule-card">
                <h3 class="rule-title">Yasaklı Kelimelere Dikkat Et</h3>
                <img src="@/assets/hibu.svg" alt="Yasak" />
            </div>
            <div class="rule-card">
                <h3 class="rule-title">Süreye Yetişmeye Çalış</h3>
                <img src="@/assets/sand.svg" alt="Son" />
            </div>
            <div class="rule-card">
                <h3 class="rule-title">Hedef Skora Ulaş</h3>
                <img src="@/assets/celebrate.svg" alt="Hedef" />
            </div>
        </div>
        <RouterLink to="/single-player">Oyuna Başla </RouterLink>
    </div>
</template>

<style scoped>
.rules {
    margin: 50px 20%;
    padding: 40px 50px;
    width: 60%;
    text-align: center;
    border-radius: 10px;
    background: var(--bg-purple);
    color: var(--color-yellow);
    height: calc(100% - 150px);
    overflow: auto;
}
.title {
    font-size: 40px;
    font-weight: bold;
    border-bottom: 1px dotted var(--color-yellow);
}
.rules-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
}
.rule-card {
    width: calc(33% - 20px);
    margin: 10px;
    padding: 20px;
    border: 1px solid var(--color-yellow);
    border-radius: 5px;
    background: var(--bg-purple);
    color: var(--color-yellow);
    text-align: center;
    flex-basis: calc(33% - 20px);
}
.rule-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.rule-card img {
    width: 150px;
}
a {
    padding: 10px;
    border: 1px solid var(--color-purple);
    border-radius: 5px;
    background-color: var(--bg-purple);
    color: var(--color-bright-purple);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
    text-align: center;
}
a:hover {
    background-color: var(--bg-bright-purple);
    color: var(--color-purple);
}
@media screen and (max-width: 1168px) {
    .rules {
        margin: 0;
        height: calc(100% - 60px);
        width: 100%;
    }
    .rules-cards {
        flex-direction: column;
    }
    .rule-card {
        width: 100%;
        margin: 0;
        padding: 20px;
        border: 1px solid var(--color-yellow);
        border-radius: 5px;
        background: var(--bg-purple);
        color: var(--color-yellow);
        text-align: center;
        flex-basis: 100%;
    }
    .rule-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .rule-card img {
        width: 150px;
    }
}
</style>
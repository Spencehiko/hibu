<script setup lang="ts">
</script>

<template>
    <div class="rules">
        <h1 class="title">KURALLAR</h1>
        <ol class="rules-list">
            <li>Sıra sizin takıma geldiğinde bir anlatıcı seçin.</li>
            <li>Karşı takımdan bir kişiyi kontrolcü olarak seçin.</li>
            <li>Kart ekrana geldiğinde altındaki yasaklı kelimeleri kullanmadan anlatmaya çalışın.</li>
            <li>Eğer yasaklı kelimelerden birini kullanırsanız 1 puanınız silinir.</li>
            <li>Kelimeyi başarılı bir şekilde anlatırsanız takımınız 1 puan kazanır ve sıradaki karta geçersiniz.</li>
            <li>Süreniz sona erince anlatmayı bırakın.</li>
            <li>Her oyun için hedef skoru, zaman limitini, pas hakkı sayısını oyun başında siz belirlersiniz.</li>
        </ol>
    </div>
</template>

<style scoped>
.rules{
    margin: 50px 150px;
    padding: 50px;
    text-align: center;
    border-radius: 10px;
    background: var(--bg-purple);
    color: var(--color-yellow);
    max-height: calc(100% - 100px);
    overflow: auto;
}
.title{
    font-size: 40px;
    font-weight: bold;
    border-bottom: 1px dotted var(--color-yellow);
}
.rules-list{
    margin: 20px 0;
    font-size: 26px;
    text-align: left;
    line-height: 2.5rem;
}
.rules-list li{
    font-weight: 600;
}
</style>
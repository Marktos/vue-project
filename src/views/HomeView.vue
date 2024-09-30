<template>
    <div class="home-view">
        <h1>Bienvenido!</h1>
    
    </div>
</template>

<script setup lang="ts">
import { userStore } from '../stores/userStore';

const store = userStore();
const user = store.userStore;
</script>

<style scoped>
.home-view {
    text-align: center;
    margin-top: 50px;
    color: #fff;
    }
</style>

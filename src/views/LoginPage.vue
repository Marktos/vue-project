<template>
    <div class="login-page">
    <LoginForm />
    </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/loginForm.vue';
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('/src/assets/background.jpg') no-repeat center center fixed;
    background-size: cover;
}
</style>

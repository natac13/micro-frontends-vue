<script setup lang="ts">
import { navigateToUrl } from 'single-spa'

// import { RouterLink } from 'vue-router'
const url = '/safetyhq'
</script>

<template>
  <header class="w-full">
    <div>
      <nav class="h-12 bg-gray-950 w-full text-white flex items-center justify-between px-6">
        <p class="text-xl font-bold">Project HQ</p>
        <!-- <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/safety-hq"> SafetyHQ </RouterLink> -->
        <a href="/safetyhq" @click.prevent="navigateToUrl('/safetyhq')">SafetyHQ</a>
      </nav>
    </div>
  </header>

  <div class="flex flex-col items-center justify-center w-screen bg-pink-700 text-white">
    <h1 class="text-3xl font-bold">Welcome to Project HQ</h1>
  </div>
  <div id="single-spa-application:safetyhq"></div>
</template>

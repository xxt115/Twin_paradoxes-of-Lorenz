<script setup lang="ts">
import MaterialThemeProvider from './components/MaterialThemeProvider.vue'
import Header from './components/Header.vue'
import Compute from './components/Compute.vue'
import HctPicker from './components/HctPicker.vue'
import { inject } from 'vue'
import { ThemeService, ThemeServiceSymbol } from './services/theme.service'

const theme = inject<ThemeService>(ThemeServiceSymbol)!
</script>

<template>
  <MaterialThemeProvider
    :is-dark="theme.isDark.value"
    :source-color-hct-raw="theme.hctRaw.value"
    class="surface min-h-svh overflow-auto"
  >

    <Header>
      <template #headline>Twin_paradoxes-of-Lorenz-algorithm</template>
      <template #actions>
        <md-icon-button @click="() => theme.isDark.value = !theme.isDark.value">
          <md-icon>{{ theme.isDark.value ? 'light_mode' : 'dark_mode' }}</md-icon>
        </md-icon-button>
        <HctPicker
          @hct-change="(hct) => theme.hctRaw.value = hct"
          :default-chroma="theme.hctRaw.value.chroma"
          :default-hue="theme.hctRaw.value.hue"
          :default-tone="theme.hctRaw.value.tone"
        ></HctPicker>
      </template>
    </Header>

    <main class="content-view">
      <Compute></Compute>
    </main>

  </MaterialThemeProvider>

</template>

<style scoped>
.content-view {
  @apply container p-8 md:p-16 mx-auto lg:max-w-3xl;
}
</style>

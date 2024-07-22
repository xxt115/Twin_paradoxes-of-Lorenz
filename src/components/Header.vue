<template>
    <header class="h-[64px] surface-container flex items-center px-8 justify-between">
        <span class="title-medium on-surface">
            <slot name="headline"></slot>
        </span>

        <div class="flex gap-2">
            <slot name="actions"></slot>
        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped></style>

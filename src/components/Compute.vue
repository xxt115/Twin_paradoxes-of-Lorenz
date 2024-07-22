<template>
    <div class="compute">
        <div class="form">
            <md-outlined-text-field
                label="飞船的速度 (m/s)"
                type="number"
                v-model="v"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="飞船外时间 (s)"
                type="number"
                v-model="t"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="小说设定的光速 (m/s)"
                type="number"
                v-model="c"
            ></md-outlined-text-field>
        </div>

        <div class="results">
            <section class="card">
                <span class="headline">飞船内时间(s)</span>
                <span class="value">{{ t2.toFixed(6) }}</span>
            </section>
            <section class="card">
                <span class="headline">飞船走过的距离(m)</span>
                <span class="value">{{ x.toFixed(6) }}</span>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MathService, MathServiceSymbol } from '../services/lorentz.service'
import { inject, ref, watchEffect } from 'vue'

//飞船的速度（m/s)
const v = ref<number>(0)
//飞船外时间（s）
const t = ref(0)
//飞船走过的距离（m）
const x = ref(0)
//飞船内时间(s)
const t2 = ref(0)
//光速
const c = ref(299792458)

const maths = inject<MathService>(MathServiceSymbol)!

watchEffect(() => {
    const { distance, timeInCraft } = maths.Lorentz(t.value, v.value, c.value)
    x.value = distance
    t2.value = timeInCraft
})
</script>

<style scoped>
.compute {
    @apply flex flex-col gap-8;
}

.form {
    @apply flex flex-col justify-center gap-4;
}

.results {
    @apply on-surface flex flex-col gap-4;

    &>.card {
        @apply rounded-lg primary-container on-primary-container flex flex-col gap-2 p-4 overflow-auto;

        &>.headline {
            @apply title-medium text-center;
        }

        &>.value {
            @apply display-medium text-center;
        }
    }
}
</style>

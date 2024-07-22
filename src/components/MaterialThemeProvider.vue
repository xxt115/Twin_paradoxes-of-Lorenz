<template>
    <div
        ref="rootRef"
        class="md-tokens"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { THctRaw } from 'src/types/hct'
import { onMounted, ref, watch } from 'vue'
import { EMaterialVariant, MaterialDynamicSchemeGenerator, TColor } from '@glare-labs/material-tokens-generator'
import { Hct, hexFromArgb } from '@material/material-color-utilities'

const props = defineProps<{
    isDark: boolean
    sourceColorHctRaw: THctRaw
}>()

const rootRef = ref<HTMLElement | null>(null)

onMounted(() => {
    const stylesElement = document.createElement('style')
    stylesElement.id = 'material-tokens'
    rootRef.value?.appendChild(stylesElement)
    updateStyles()
})

watch(() => [props.isDark, props.sourceColorHctRaw], () => {
    updateStyles()
})

const updateStyles = () => {
    rootRef.value!.querySelector('#material-tokens')!.textContent = `.md-tokens {${MaterialDynamicSchemeGenerator.GenerateByVariant(
        hexFromArgb(Hct.from(props.sourceColorHctRaw.hue, props.sourceColorHctRaw.chroma, props.sourceColorHctRaw.tone).toInt()) as TColor,
        {
            isDark: props.isDark,
            variant: EMaterialVariant.CONTENT
        }).ToStyleText()}}`
}
</script>

<template>
    <span class="relative z-10">
        <md-icon-button id="hct-picker-toggle-button">
            <md-icon>palette</md-icon>
        </md-icon-button>
        <md-menu
            id="hct-picker-menu"
            anchor="hct-picker-toggle-button"
        >
            <span class="px-4 on-surface title-large">Hct Palette</span>
            <div class="py-4 px-4 [&>label>span]:on-surface">
                <label>
                    <span>Hue</span>
                    <md-slider
                        labeled
                        min="0"
                        max="360"
                        :value="hct.hue"
                        @input="(e: Event) => onHctSliderChange({
                            hue: (e.target as MdSlider).value
                        })"
                    ></md-slider>
                </label>
                <label>
                    <span>Chroma</span>
                    <md-slider
                        labeled
                        min="0"
                        max="150"
                        :value="hct.chroma"
                        @input="(e: Event) => onHctSliderChange({
                            chroma: (e.target as MdSlider).value
                        })"
                    ></md-slider>
                </label>
                <label>
                    <span>Tone</span>
                    <md-slider
                        labeled
                        min="0"
                        max="100"
                        :value="hct.tone"
                        @input="(e: Event) => onHctSliderChange({
                            tone: (e.target as MdSlider).value
                        })"
                    ></md-slider>
                </label>
            </div>
        </md-menu>
    </span>
</template>

<script setup lang="ts">
import { MdMenu, MdSlider } from '@material/web/all'
import { THctRaw } from 'src/types/hct'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
    defaultHue?: number
    defaultChroma?: number
    defaultTone?: number
}>(), {
    defaultHue: 50,
    defaultChroma: 50,
    defaultTone: 75,
})

const emits = defineEmits<{
    hctChange: [THctRaw]
}>()

const hct = ref<THctRaw>({
    chroma: props.defaultChroma,
    hue: props.defaultHue,
    tone: props.defaultTone
})
const onHctSliderChange = (options: Partial<THctRaw>) => {
    hct.value = {
        ...hct.value,
        ...options
    }
    emits('hctChange', hct.value)
}


const onMenuButtonClick = () => {
    const menu = document.querySelector('#hct-picker-menu')! as MdMenu
    if (menu.open) {
        menu.close()
    } else {
        menu.show()
    }
}

onMounted(() => {
    document.querySelector('#hct-picker-toggle-button')?.addEventListener('click', onMenuButtonClick)
})
onBeforeUnmount(() => {
    document.querySelector('#hct-picker-toggle-button')?.removeEventListener('click', onMenuButtonClick)
})
</script>

<style scoped></style>

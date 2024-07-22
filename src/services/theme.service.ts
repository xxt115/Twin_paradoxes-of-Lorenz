import { THctRaw } from "src/types/hct"
import { computed, ref } from "vue"

export const ThemeServiceSymbol = Symbol('theme-service')
const ThemeServiceLocalStorage = 'theme-service-local-storage'

export class ThemeService {
    private _isDark = ref(false)
    private _hctRaw = ref<THctRaw>({
        chroma: 50,
        hue: 50,
        tone: 75
    })

    public readonly isDark = computed({
        get: () => this._isDark.value,
        set: (value: boolean) => {
            this._isDark.value = value
            this.saveChanges()
        }
    })

    public readonly hctRaw = computed({
        get: () => this._hctRaw.value,
        set: (value: THctRaw) => {
            this._hctRaw.value = value
            this.saveChanges()
        }
    })

    constructor() {
        const json = JSON.parse(localStorage.getItem(ThemeServiceLocalStorage) || JSON.stringify({
            isDark: this.isDark.value,
            hctRaw: this.hctRaw.value
        }))
        this.isDark.value = json['isDark']
        this.hctRaw.value = json['hctRaw']
    }

    private _timer: NodeJS.Timeout | null = null
    private saveChanges() {
        if (this._timer) clearTimeout(this._timer)
        this._timer = setTimeout(() => {
            localStorage.setItem(ThemeServiceLocalStorage, JSON.stringify({
                isDark: this._isDark.value,
                hctRaw: this._hctRaw.value
            }))
        }, 500)
    }
}

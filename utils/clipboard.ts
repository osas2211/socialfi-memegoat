import { notify } from "./notify"

const copyToClipboard = async (value: string) => {
    try {
        await navigator.clipboard.writeText(value)
        notify('success', 'Smart key copied!')
    } catch {
        notify('error', 'Error copying smart key')
    }
}

export { copyToClipboard }
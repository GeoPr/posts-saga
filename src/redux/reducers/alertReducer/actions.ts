import { SHOW_ALERT, HIDE_ALERT } from './actionsTypes'

export const showAlert = (text: string) => ({
	type: SHOW_ALERT,
	pyaload: { text }
} as const)

export const hideAlert = () => ({
	type: HIDE_ALERT
} as const)
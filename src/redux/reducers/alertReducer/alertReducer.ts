import { SHOW_ALERT, HIDE_ALERT } from './actionsTypes'
import { TActions } from './../../store'
import * as actions from './actions'

interface IInitalState {
	isOpen: boolean
	text: string
}

const initalState: IInitalState = {
	isOpen: false,
	text: ''
}

type ActionsTypes = TActions<typeof actions>

export const alertReducer = (
	state: IInitalState = initalState,
	action: ActionsTypes
): IInitalState => {
	switch (action.type) {
		case SHOW_ALERT: {
			const { text } = action.pyaload

			return { ...state, isOpen: true, text }
		}

		case HIDE_ALERT: {
			return { ...state, isOpen: false }
		}

		default: return state
	}
}


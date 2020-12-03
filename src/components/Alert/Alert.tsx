import React from 'react'
import { useSelector } from 'react-redux'
import { TApp } from '../../redux/store'
import './Alert.scss'

export const Alert: React.FC = () => {
	const { text } = useSelector((state: TApp) => state.alert)

	return (
		<div className="alert">
			<div className="alert__body">
				<div className="alert__text">
					{text}
				</div>
			</div>
		</div>
	)
}
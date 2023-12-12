import { FC } from 'react'
import { ATM } from '../types/Types'
import { Box } from '@mui/material'
import CardComponent from './Card'

type CardListProps = {
	atms: ATM[]
	onCardClick: (selectedAtm: ATM | undefined) => void
	selectedAtmId: number
}

const CardList: FC<CardListProps> = ({ atms, onCardClick, selectedAtmId }) => {
	return (
		<Box sx={{ maxHeight: '75vh', overflow: 'hidden', overflowY: 'scroll' }}>
			{atms.map((atm) => (
				<CardComponent
					key={atm._id}
					atm={atm}
					onClick={onCardClick}
					selectedAtmId={selectedAtmId}
				/>
			))}
		</Box>
	)
}

export default CardList

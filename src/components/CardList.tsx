import { FC } from 'react'
import { ATM } from '../types/Types'
import { Box } from '@mui/material'
import CardComponent from './Card'

type CardListProps = {
	atms: ATM[]
	onCardClick: (selectedAtm: ATM) => void
}

const CardList: FC<CardListProps> = ({ atms, onCardClick }) => {
	return (
		<Box sx={{ maxHeight: '75vh', overflow: 'hidden', overflowY: 'scroll' }}>
			{atms.map((atm) => (
				<CardComponent
					key={atm._id}
					atm={atm}
					onClick={onCardClick}
				/>
			))}
		</Box>
	)
}

export default CardList

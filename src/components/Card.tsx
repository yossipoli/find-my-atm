import { Card, CardContent, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { ATM } from '../types/Types'
import { FC } from 'react'

type CardComponentProps = {
	atm: ATM
	onClick: (selectedAtm: ATM) => void
}

const CardComponent: FC<CardComponentProps> = ({ atm, onClick }) => {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'row',
				border: '1px solid lightgrey',
				margin: '3px 0',
				boxShadow: '1px 1px 1px',
				cursor: 'pointer',
			}}
			onClick={() => onClick(atm)}>
			<CardContent>
				<LocationOnIcon
					fontSize='large'
					sx={{ color: atm.ATM_Type === 'משיכת מזומן' ? 'orange' : 'blue' }}
				/>
			</CardContent>
			<CardContent>
				<Typography
					sx={{ fontStyle: 'bold', fontSize: '1.2rem' }}
					component='div'>
					{atm.Bank_Code}-{atm.Bank_Name}
				</Typography>

				<Typography
					sx={{ fontSize: 14 }}
					color='text.secondary'
					gutterBottom>
					{atm.ATM_Address}, {atm.City} | {atm.ATM_Type}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardComponent

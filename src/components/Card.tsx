import { Card, CardContent, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { ATM } from '../types/Types'
import { FC } from 'react'

type CardComponentProps = {
	atm: ATM
}

const CardComponent: FC<CardComponentProps> = ({ atm }) => {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'row',
				border: '1px solid lightgrey',
				margin: '3px 0',
				boxShadow: '1px 1px 1px',
			}}>
			<CardContent>
				<LocationOnIcon
					fontSize='medium'
					sx={{ color: atm.ATM_Type === 'משיכת מזומן' ? 'orange' : 'blue' }}
				/>
			</CardContent>
			<CardContent>
				<Typography
					variant='h6'
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

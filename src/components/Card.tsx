import { Card, CardContent, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const CardComponent = () => {
	return (
		<Card sx={{ display: 'flex', flexDirection: 'row' }}>
			<CardContent>
				<LocationOnIcon
					fontSize='large'
					sx={{ color: 'orange' }}
				/>
			</CardContent>
			<CardContent>
				<Typography
					variant='h5'
					component='div'>
					{'Word of the Day'}
				</Typography>

				<Typography
					sx={{ fontSize: 14 }}
					color='text.secondary'
					gutterBottom>
					{'word'} | {'word'}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardComponent

import { Box, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FC } from 'react'
import {
	ALL_ATM_TYPES,
	ALL_BANKS,
	BankName,
	SearchParams,
} from '../types/Types'

type SearchProps = {
	searchParams: SearchParams
	changeParams: (newParams: SearchParams) => void
	banks: string[]
}

const Search: FC<SearchProps> = ({ searchParams, changeParams, banks }) => {
	const onChange = (
		id: keyof SearchParams,
		value: SearchParams['city' | 'bank' | 'atmType']
	) => {
		const newParams = { ...searchParams, [id]: value }
		changeParams(newParams)
	}

	return (
		<>
			<TextField
				sx={{
					width: '100%',
					marginTop: '5px',
				}}
				label='חיפוש לפי עיר'
				onChange={(e) => onChange('city', e.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<Select
					value={searchParams.bank}
					sx={{ width: '50%' }}
					onChange={(e) => onChange('bank', e.target.value)}>
					<MenuItem value={ALL_BANKS}>כל הבנקים</MenuItem>
					{banks.map((bank: BankName) => (
						<MenuItem
							key={bank}
							value={bank}>
							{bank}
						</MenuItem>
					))}
				</Select>

				<Select
					value={searchParams.atmType}
					sx={{ width: '50%' }}
					onChange={(e) => onChange('atmType', e.target.value)}>
					<MenuItem value={ALL_ATM_TYPES}>כל הבנקטים</MenuItem>
					<MenuItem value={'משיכת מזומן'}>משיכת מזומן</MenuItem>
					<MenuItem value={'מכשיר מידע/ואו מתן הוראות'}>
						מכשיר מידע/ואו מתן הוראות
					</MenuItem>
				</Select>
			</Box>
		</>
	)
}

export default Search

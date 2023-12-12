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
		value: SearchParams['City' | 'Bank_Name' | 'ATM_Type']
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
				onChange={(e) => onChange('City', e.target.value)}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<Select
					value={searchParams.Bank_Name}
					sx={{ width: '50%' }}
					onChange={(e) => onChange('Bank_Name', e.target.value)}>
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
					value={searchParams.ATM_Type}
					sx={{ width: '50%' }}
					onChange={(e) => onChange('ATM_Type', e.target.value)}>
					<MenuItem value={ALL_ATM_TYPES}>כל הבנקטים</MenuItem>
					<MenuItem value={'משיכת מזומן'}>משיכת מזומן</MenuItem>
					<MenuItem value={'מכשיר מידע/או מתן הוראות'}>
						מכשיר מידע/או מתן הוראות
					</MenuItem>
				</Select>
			</Box>
		</>
	)
}

export default Search

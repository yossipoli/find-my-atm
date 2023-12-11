import {
	Autocomplete,
	Box,
	Divider,
	InputAdornment,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FC, useEffect, useState } from 'react'
import { BankName, CityName, SearchParams } from '../types/Types'
import API from '../DAL/API'

type SearchProps = {
	searchParams: SearchParams
	changeParams: (newParams: SearchParams) => void
}

const Search: FC<SearchProps> = (searchParams, changeParams) => {
	const [cities, setCities] = useState<CityName[]>([])
	const [banks, setBanks] = useState<BankName[]>([])

	const onChange = (
		id: keyof SearchParams,
		value: SearchParams['city' | 'bank' | 'type']
	) => {
		const newParams = { ...searchParams, [id]: value }
		console.log('searchParams', searchParams)

		changeParams(newParams)
	}

	useEffect(() => {
		;(async () => {
			setCities(await API.getCities())
			setBanks(await API.getBanksName())
		})()
	}, [])
	return (
		<Box>
			<Box>
				<Autocomplete
					disablePortal
					value={searchParams.city}
					options={cities}
					sx={{ width: 400 }}
					renderInput={(params) => (
						<TextField
							{...params}
							label='חיפוש לפי עיר'
							onChange={(e) => onChange('city', e.target.value)}
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<InputAdornment position='start'>
										<SearchIcon color='action' />
									</InputAdornment>
								),
							}}
						/>
					)}
				/>
				<Box>
					<Select
						label='כל הבנקים'
						value={searchParams.bank}
						sx={{ width: 200 }}
						onChange={(e) => onChange('bank', e.target.value)}>
						<MenuItem value=''>כל הבנקים</MenuItem>
						{banks.map((bank: BankName) => (
							<MenuItem
								key={bank}
								value={bank}>
								{bank}
							</MenuItem>
						))}
					</Select>

					<Select
						label='כל סוגי הבנקטים'
						value={searchParams.type}
						sx={{ width: 200 }}
						onChange={(e) => onChange('type', e.target.value)}>
						<MenuItem value={'משיכת מזומן'}>משיכת מזומן</MenuItem>
						<MenuItem value={'מכשיר מידע/ואו מתן הוראות'}>
							מכשיר מידע/ואו מתן הוראות
						</MenuItem>
					</Select>
				</Box>
				<Divider
					orientation='horizontal'
					sx={{ margin: '20px' }}
					flexItem
				/>
			</Box>
		</Box>
	)
}

export default Search

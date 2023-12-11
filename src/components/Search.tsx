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
import {
	ALL_ATM_TYPES,
	ALL_BANKS,
	ATM,
	BankName,
	CityName,
	SearchParams,
} from '../types/Types'
import API from '../DAL/API'
import CardComponent from './Card'

type SearchProps = {
	searchParams: SearchParams
	changeParams: (newParams: SearchParams) => void
	atms: ATM[]
}

const Search: FC<SearchProps> = ({ searchParams, changeParams, atms }) => {
	const [cities, setCities] = useState<CityName[]>([])
	const [banks, setBanks] = useState<BankName[]>([])

	const onChange = (
		id: keyof SearchParams,
		value: SearchParams['city' | 'bank' | 'atmType']
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
		<Box width={400}>
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
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<Select
					label='כל הבנקים'
					value={searchParams.bank}
					sx={{ width: 200 }}
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
					label='כל סוגי הבנקטים'
					value={searchParams.atmType}
					sx={{ width: 200 }}
					onChange={(e) => onChange('atmType', e.target.value)}>
					<MenuItem value={ALL_ATM_TYPES}>כל הבנקטים</MenuItem>
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
			<Box>
				{atms.map((atm) => (
					<CardComponent
						key={atm._id}
						atm={atm}
					/>
				))}
			</Box>
		</Box>
	)
}

export default Search

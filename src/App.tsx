import { Box } from '@mui/material'
import './App.css'
import IsraelMap from './components/Map'
import { useEffect, useState } from 'react'
import API from './DAL/API'
import { ATM, Bank, CityName, SearchParams } from './types/Types'
import Search from './components/Search'

const App = () => {
	const [searchParams, setSearchParams] = useState<SearchParams>({
		city: '',
		bank: '',
		type: '',
	})

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<Search
				searchParams={searchParams}
				changeParams={(newParams) => setSearchParams(newParams)}
			/>
			<IsraelMap />
		</Box>
	)
}

export default App

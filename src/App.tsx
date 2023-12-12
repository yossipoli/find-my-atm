import { Box } from '@mui/material'
import './App.css'
import IsraelMap from './components/Map'
import { useEffect, useState } from 'react'
import API from './DAL/API'
import { ALL_ATM_TYPES, ALL_BANKS, ATM, SearchParams } from './types/Types'
import Search from './components/Search'

const App = () => {
	const [atms, setAtms] = useState<ATM[]>([])
	const [searchParams, setSearchParams] = useState<SearchParams>({
		city: '',
		bank: ALL_BANKS,
		atmType: ALL_ATM_TYPES,
	})

	useEffect(() => {
		API.getAtm(searchParams)
			.then((result) => setAtms(result))
			.catch((err) => setAtms([]))
	}, [...Object.values(searchParams)])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<Box sx={{ width: '30%', height: '100vh' }}>
				<Search
					searchParams={searchParams}
					changeParams={(newParams) => setSearchParams(newParams)}
					atms={atms}
				/>
			</Box>
			<Box sx={{ width: '70%', height: '100vh' }}>
				<IsraelMap />
			</Box>
		</Box>
	)
}

export default App

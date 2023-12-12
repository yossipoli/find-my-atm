import { Box } from '@mui/material'
import './App.css'
import IsraelMap from './components/Map'
import { useEffect, useState } from 'react'
import API from './DAL/API'
import {
	ALL_ATM_TYPES,
	ALL_BANKS,
	ATM,
	BankName,
	SearchParams,
} from './types/Types'
import Search from './components/Search'
import { useDebounce } from 'use-debounce'
import CardList from './components/CardList'

const SEARCH_DEBOUNCE_DELAY = 300

const App = () => {
	const [atms, setAtms] = useState<ATM[]>([])
	const [banks, setBanks] = useState<BankName[]>([])
	const [selectedAtm, setSelectedAtm] = useState<ATM>()
	const [searchParams, setSearchParams] = useDebounce<SearchParams>(
		{
			city: '',
			bank: ALL_BANKS,
			atmType: ALL_ATM_TYPES,
		},
		SEARCH_DEBOUNCE_DELAY,
		{
			equalityFn: (oldSearchParams, newSearchParams) =>
				oldSearchParams.city === newSearchParams.city,
		}
	)
	useEffect(() => {
		API.getAtm(searchParams)
			.then((result) => {
				setSelectedAtm(undefined)
				setAtms(result)
			})
			.catch((err) => setAtms([]))
	}, [searchParams])

	useEffect(() => {
		;(async () => {
			setBanks(await API.getBanksName())
		})()
	}, [])

	const selectAtm = (atm: ATM) => {
		setSelectedAtm(atm)
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<Box sx={{ width: '40%' }}>
				<Search
					searchParams={searchParams}
					changeParams={(newParams) => setSearchParams(newParams)}
					banks={banks}
				/>
				<CardList
					atms={atms}
					onCardClick={selectAtm}
					selectedAtmId={selectedAtm?._id || -1}
				/>
			</Box>
			<IsraelMap atms={selectedAtm ? [selectedAtm] : atms} />
		</Box>
	)
}

export default App

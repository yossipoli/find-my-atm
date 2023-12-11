import { Container } from '@mui/material'
import './App.css'
import IsraelMap from './components/Map'
import { useEffect, useState } from 'react'
import API from './DAL/API'
import { ATM, Bank, City } from './types/queries'

const App = () => {
	const [cities, setCities] = useState<City[]>([])
	const [banks, setBanks] = useState<Bank[]>([])
	const [atm, setAtm] = useState<ATM[]>([])

	useEffect(() => {
		;(async () => {
			setCities(await API.getCities())
			setBanks(await API.getBanks())
			setAtm(await API.getAtm())
		})()
	}, [])

	return (
		<Container>
			{/* <IsraelMap /> */}
			<h1>test</h1>
			<ul>
				{atm.map((bank) => (
					<li>
						{/* {bank} */}
						{/* {bank.Bank_Name} */}
						{/* {bank.Bank_Name}, X={bank.X_Coordinate}, Y= {bank.Y_Coordinate} */}
					</li>
				))}
			</ul>
		</Container>
	)
}

export default App

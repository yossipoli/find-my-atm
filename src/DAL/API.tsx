import { ATM, ATM_type, Bank, BankName, City, CityName } from '../types/Types'

const api_url = 'https://data.gov.il/api/3/action/datastore_search'
const cities_resource = 'd4901968-dad3-4845-a9b0-a57d027f11ab'
const banks_resource =
	'ebb61778-e34c-4e67-8fcf-0e643d9cf8c2&q={"Category":"בנקים רגילים"}'
const atm_resource = 'b9d690de-0a9c-45ef-9ced-3e5957776b26'

const API = {
	getCities: async (): Promise<CityName[]> => {
		const cities = await fetch(
			`${api_url}?resource_id=${cities_resource}&limit=15000`
		).then((res) => res.json())
		return cities.result.records.map((city: City) => city['שם_ישוב'].trim())
	},

	getBanksName: async (): Promise<BankName[]> => {
		const banks = await fetch(`${api_url}?resource_id=${banks_resource}`).then(
			(res) => res.json()
		)
		return banks.result.records.map((bank: Bank) => bank.Bank_Name)
	},

	getAtm: async (
		city?: CityName,
		bankName?: BankName,
		type?: ATM_type
	): Promise<ATM[]> => {
		const cityQuery = city ? `"City": "${city}",` : ''
		const bankQuery = bankName ? `"Bank_Name": "${bankName}",` : ''
		const atmQuery = type ? `ATM_Type": "${type}"` : ''
		const q = `q={${cityQuery}${bankQuery}${atmQuery}}`
		const atm = await fetch(`${api_url}?resource_id=${atm_resource}&${q}`).then(
			(res) => res.json()
		)
		return atm.result.records
	},
}

export default API

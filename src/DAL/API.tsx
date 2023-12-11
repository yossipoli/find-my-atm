import {
	ALL_ATM_TYPES,
	ALL_BANKS,
	ATM,
	Bank,
	BankName,
	City,
	CityName,
	SearchParams,
} from '../types/Types'

const API_URL = 'https://data.gov.il/api/3/action/datastore_search'
const CITIES_RESOURCE = 'd4901968-dad3-4845-a9b0-a57d027f11ab'
const BANKS_RESOURCE =
	'ebb61778-e34c-4e67-8fcf-0e643d9cf8c2&q={"Category":"בנקים רגילים"}'
const ATM_RESOURCE = 'b9d690de-0a9c-45ef-9ced-3e5957776b26'

const API = {
	getCities: async (): Promise<CityName[]> => {
		const cities = await fetch(
			`${API_URL}?resource_id=${CITIES_RESOURCE}&limit=15000`
		).then((res) => res.json())
		return cities.result.records.map((city: City) => city['שם_ישוב'].trim())
	},

	getBanksName: async (): Promise<BankName[]> => {
		const banks = await fetch(`${API_URL}?resource_id=${BANKS_RESOURCE}`).then(
			(res) => res.json()
		)
		return banks.result.records.map((bank: Bank) => bank.Bank_Name)
	},

	getAtm: async ({ city, bank, atmType }: SearchParams): Promise<ATM[]> => {
		const query = {
			City: city || undefined,
			Bank_Name: bank === ALL_BANKS ? undefined : bank,
			ATM_Type: atmType === ALL_ATM_TYPES ? undefined : atmType,
		}

		const urlSearchParams = new URLSearchParams({
			resource_id: ATM_RESOURCE,
			filters: JSON.stringify(query),
		})

		const atm = await fetch(`${API_URL}?${urlSearchParams.toString()}`).then(
			(res) => res.json()
		)
		return atm.result.records
	},
}

export default API

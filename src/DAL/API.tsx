import { latLngBounds, latLng } from 'leaflet'
import {
	ALL_ATM_TYPES,
	ALL_BANKS,
	ATM,
	Bank,
	BankName,
	SearchParams,
} from '../types/Types'

const API_URL = 'https://data.gov.il/api/3/action/datastore_search'
const CITIES_RESOURCE = 'd4901968-dad3-4845-a9b0-a57d027f11ab'
const BANKS_RESOURCE =
	'ebb61778-e34c-4e67-8fcf-0e643d9cf8c2&q={"Category":"בנקים רגילים"}'
const ATM_RESOURCE = 'b9d690de-0a9c-45ef-9ced-3e5957776b26'
const ISRAEL_BOUNDS = latLngBounds(
	latLng(29.45, 34.267), // Southwest coordinates
	latLng(33.333, 35.897) // Northeast coordinates
)

const filterIsraelATMs = (atms: ATM[]): ATM[] => {
	return atms.filter((atm) => {
		if (!atm.X_Coordinate || !atm.Y_Coordinate) {
			return false
		}
		const atmLocation = latLng(atm.X_Coordinate, atm.Y_Coordinate)
		return ISRAEL_BOUNDS.contains(atmLocation)
	})
}
const API = {
	getBanksName: async (): Promise<BankName[]> => {
		const res = await fetch(`${API_URL}?resource_id=${BANKS_RESOURCE}`)
		const banks = await res.json()
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

		const res = await fetch(`${API_URL}?${urlSearchParams.toString()}`)
		const atmsResult = await res.json()
		return filterIsraelATMs(atmsResult.result.records)
	},
}

export default API

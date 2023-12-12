export const ALL_BANKS = 'All Banks'
export const ALL_ATM_TYPES = 'All ATM Types'

export type CityName = string
export type BankName = string
export type ATM_type =
	| 'משיכת מזומן'
	| 'מכשיר מידע/או מתן הוראות'
	| 'All ATM Types'

export type SearchParams = {
	City: CityName
	Bank_Name: BankName
	ATM_Type: ATM_type
}

export type Bank = {
	_id: number
	Category: 'בנקים רגילים'
	Bank_Code: string
	Bank_Name: string
	Internet_Address: string
	Swift_Code: string
	Address: string
	City: CityName
	Zip_Code: string
	Telephone: string
	Fax: string
	'rank Category': number
}

export type ATM = {
	_id: number
	Bank_Code: number
	Bank_Name: Bank['Bank_Name']
	Branch_Code: number
	Atm_Num: number
	ATM_Address: string
	ATM_Address_Extra: string
	City: CityName
	Commission: 'לא' | 'כן'
	ATM_Type: ATM_type
	ATM_Location: string
	Handicap_Access: 'לא' | 'כן'
	X_Coordinate: number
	Y_Coordinate: number
	'rank City': number
	'rank Bank_Name': number
	'rank ATM_Type': number
}

export type City = {
	_id: number
	טבלה: 'טבלת ישובים'
	סמל_ישוב: number
	שם_ישוב: CityName
	שם_ישוב_לועזי: CityName
	סמל_נפה: number
	שם_נפה: string
	סמל_לשכת_מנא: number
	לשכה: string
	סמל_מועצה_איזורית: number
	שם_מועצה: string
}

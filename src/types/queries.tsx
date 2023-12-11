import API from './../DAL/API'

export type City = string
export type ATM_type = 'משיכת מזומן' | 'מכשיר מידע/ואו מתן הוראות'
export type BankName = string

export type Bank = {
	_id: number
	Category: 'בנקים רגילים'
	Bank_Code: string
	Bank_Name: string
	Internet_Address: string
	Swift_Code: string
	Address: string
	City: City
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
	City: City
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

import 'leaflet/dist/leaflet.css'
import { divIcon, latLngBounds, LatLngBoundsExpression } from 'leaflet'
import { FC } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { renderToString } from 'react-dom/server'
import { ATM } from '../types/Types'

type IsraelMapProps = {
	atms: ATM[]
}

const BoundsManager: FC<{ bounds: LatLngBoundsExpression }> = ({ bounds }) => {
	const map = useMap()
	map.fitBounds(bounds)
	return null
}

const IsraelMap: FC<IsraelMapProps> = ({ atms }) => {
	const atmsBounds = atms.length
		? latLngBounds(atms.map((atm) => [atm.X_Coordinate, atm.Y_Coordinate]))
		: undefined

	const iconMarkup = (color: string) => (
		<LocationOnIcon
			fontSize='large'
			sx={{ color: color }}
		/>
	)

	const markerIconCreator = (color: string) =>
		divIcon({
			html: renderToString(iconMarkup(color)),
			iconSize: [0, 0],
			iconAnchor: [0, 0],
			popupAnchor: [0, 0],
		})

	return (
		<MapContainer
			style={{
				width: '100%',
				height: '100vh',
			}}
			scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{atmsBounds ? <BoundsManager bounds={atmsBounds} /> : null}
			{atms.map((atm) => (
				<Marker
					key={atm._id}
					position={[atm.X_Coordinate, atm.Y_Coordinate]}
					icon={markerIconCreator(
						atm.ATM_Type === 'משיכת מזומן' ? 'orange' : 'blue'
					)}
				/>
			))}
		</MapContainer>
	)
}

export default IsraelMap

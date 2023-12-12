import 'leaflet/dist/leaflet.css'
import { divIcon, LatLngBoundsLiteral } from 'leaflet'
import { FC } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import LocationOn from '@mui/icons-material/LocationOn'
import { renderToStaticMarkup } from 'react-dom/server'
import { ATM } from '../types/Types'

type IsraelMapProps = {
	atms: ATM[]
}

const israelMap: FC<IsraelMapProps> = ({ atms }) => {
	const israelBounds: LatLngBoundsLiteral = [
		[29.45, 34.267], // Southwest coordinates
		[33.333, 35.897], // Northeast coordinates
	]

	const iconMarkup = renderToStaticMarkup(<LocationOn />)

	const markerIcon = divIcon({
		html: iconMarkup,
	})

	return (
		<MapContainer
			style={{
				width: '100%',
				height: '100vh',
			}}
			center={[31.5, 34.8]}
			zoom={7.5}
			scrollWheelZoom={true}
			maxBounds={israelBounds}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{atms.map((atm) => (
				<Marker
					key={atm._id}
					position={[atm.X_Coordinate ?? 31.5, atm.Y_Coordinate ?? 34.8]}
					icon={markerIcon}
				/>
			))}
		</MapContainer>
	)
}

export default israelMap

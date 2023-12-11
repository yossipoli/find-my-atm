// import 'leaflet/dist/leaflet.css'
import { LatLngBoundsLiteral } from 'leaflet'
import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const israelMap: FC = () => {
	const israelBounds: LatLngBoundsLiteral = [
		[29.45, 34.267], // Southwest coordinates
		[33.333, 35.897], // Northeast coordinates
	]
	return (
		<MapContainer
			style={{
				width: '80%',
				height: '100vh',
			}}
			center={[31.5, 34.8]}
			zoom={5}
			scrollWheelZoom={false}
			maxBounds={israelBounds}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{/* <Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker> */}
		</MapContainer>
	)
}

export default israelMap

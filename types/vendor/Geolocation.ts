interface PositionOptions {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
}

interface PositionCoords {
  readonly latitude: number
  readonly altitude: number
  readonly longitude: number
  readonly accuracy: number
  readonly altitudeAccuracy: number
  readonly heading: number
  readonly speed: number
}

interface GeoJSONPoint {
  type: 'Point'
  coordinates: [number, number]
}

type PositionTimestamp = Number

interface Position {
  readonly coords: PositionCoords
  readonly timestamp: PositionTimestamp
}

interface Options {
  watch: boolean
  options: PositionOptions
}

export interface Geolocation {
  coords: PositionCoords | null
  timestamp: PositionTimestamp | null
  geoJSON: GeoJSONPoint | null
  loading: boolean
  supported: boolean

  getCurrentPosition: (options?: Options) => Promise<Position>
  setOption: (key: string, value: number | boolean) => void
  checkSupport: () => boolean
}

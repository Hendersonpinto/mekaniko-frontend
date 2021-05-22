import Nominatim from '~/api/nominatim'

/* eslint-disable camelcase */
export type Factories = {
  nominatim:ReturnType<typeof Nominatim>
}

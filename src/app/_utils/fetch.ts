import { GET } from '../_constant'
import { type ModuleGetFetchProps, type SuccessResponse } from '../_type'

export const moduleGetFetch = async (
  props: ModuleGetFetchProps,
): Promise<SuccessResponse> => {
  const { params, fetchUrl, header } = props
  const queryString = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    queryString.append(key, String(value))
  })
  const urlWithQueryString = `${fetchUrl}?${queryString.toString()}`

  const res = await fetch(urlWithQueryString, {
    method: GET,
    headers: header,
  })
  return res.json()
}

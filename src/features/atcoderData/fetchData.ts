import axiosBase from 'axios'
import rateJson from "./rate.json"
const api = axiosBase.create({
  baseURL: 'http://127.0.0.1:5000',
  responseType: 'json'
})

type parameter = { userName: string }

export const fetchData: any = async (parameter: parameter) => {
  const fetchAPI = await api.get(`/rate/${parameter.userName}`)
  const fetchRate: typeof rateJson = fetchAPI.data
  return fetchRate
}
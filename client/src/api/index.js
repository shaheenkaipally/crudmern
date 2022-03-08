import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertVaccine = payload => api.post(`/vaccine`, payload)
export const getAllVaccines = () => api.get(`/vaccines`)
export const updateVaccineById = (id, payload) => api.put(`/vaccine/${id}`, payload)
export const deleteVaccineById = id => api.delete(`/vaccine/${id}`)
export const getVaccineById = id => api.get(`/vaccine/${id}`)

const apis = {
    insertVaccine,
    getAllVaccines,
    updateVaccineById,
    deleteVaccineById,
    getVaccineById,
}

export default apis

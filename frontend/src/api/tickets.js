import { mockGetTickets, mockCreateTicket } from './mockTickets.js'

const USE_MOCK = true
const baseUrl = import.meta.env.VITE_API_BASE_URL

function makeError(status) {
  const err = new Error('HTTP ' + status)
  err.status = status
  return err
}

export async function getTickets() {
  if (USE_MOCK) {
    const res = await mockGetTickets()
    if (!res.ok) throw makeError(res.status)
    return res.data
  }

  const response = await fetch(baseUrl + '/api/tickets')
  if (!response.ok) throw makeError(response.status)
  return response.json()
}

export async function createTicket(body) {
  if (USE_MOCK) {
    const res = await mockCreateTicket(body)
    if (!res.ok) throw makeError(res.status)
    return res.data
  }

  const response = await fetch(baseUrl + '/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!response.ok) throw makeError(response.status)
  return response.json()
}
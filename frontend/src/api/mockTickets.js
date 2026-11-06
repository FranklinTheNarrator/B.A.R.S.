const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let mockItems = [
  { id: 1, number: 'FS-104', title: 'Петров И.И. - плановая проверка внимания', siteId: 1042, description: 'Плановая', status: 'InProgress' },
  { id: 2, number: 'FS-105', title: 'Сидорова А.В. - жалоба на усталость', siteId: 2087, description: 'Жалоба', status: 'Closed' },
  { id: 3, number: 'FS-106', title: 'Кузнецов Д.С. - допуск к ночной смене', siteId: 3310, description: 'Допуск', status: 'New' }
]

let nextId = 4

let force500 = false
let forceEmpty = false

export function setForce500(v) { force500 = v }
export function setForceEmpty(v) { forceEmpty = v }

export async function mockGetTickets() {
  await delay(500)
  if (force500) {
    return { ok: false, status: 500, data: { message: 'Internal error' } }
  }
  if (forceEmpty) {
    return { ok: true, status: 200, data: [] }
  }
  return { ok: true, status: 200, data: mockItems.slice() }
}

export async function mockCreateTicket(body) {
  await delay(500)

  if (force500) {
    return { ok: false, status: 500, data: { message: 'Internal error' } }
  }
  if (!body.title || body.title.length < 5) {
    return { ok: false, status: 400, data: { title: 'Слишком короткая тема' } }
  }

  const created = {
    id: nextId,
    number: 'FS-' + (100 + nextId),
    title: body.title,
    siteId: body.siteId,
    description: body.description,
    status: 'New'
  }
  nextId++
  mockItems.push(created)

  return { ok: true, status: 201, data: created }
}
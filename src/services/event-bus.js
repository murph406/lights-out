const events = {}

function getIdGenerator() {
  let lastId = 0

  return function getNextUniqueId() {
    lastId += 1
    return lastId
  }
}

const getNextUniqueId = getIdGenerator()

export function on(eventType, callback) {
  const id = getNextUniqueId()

  if (!events[eventType]) events[eventType] = {}

  events[eventType][id] = callback

  return {
    off: () => {
      delete events[eventType][id]
      if (Object.keys(events[eventType]).length === 0) delete events[eventType]
    },
  }
}

function dispatch(eventType, arg) {
  if (!events[eventType]) return

  Object.keys(events[eventType]).forEach((key) => events[eventType][key](arg))
}

const METHODS = { on, dispatch }

export default METHODS

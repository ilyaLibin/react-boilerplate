export const dispatch = (type, payload = {}) => {
  const event = new CustomEvent(type, {
    detail: payload
  })

  window.dispatchEvent(event);
}

export const on = (type, callback) => {
  window.addEventListener(type, callback)
}

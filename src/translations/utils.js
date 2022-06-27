export function replace (text, replacements) {
  const parts = text.split(/(\[|\])/g)
  const newParts = []

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]

    if (part === '[') {
      newParts.push('[' + parts[i + 1] + ']')
      i += 2
    } else {
      newParts.push(part)
    }
  }

  return newParts.map(part => {
    if (part[0] === '[') {
      const key = part.slice(1, -1)
      return replacements[key]
    } else {
      return part
    }
  })
}

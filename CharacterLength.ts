export function CharacterLength(string: string = '') {
  let counter = 0

  Array.from(string).forEach((char: string) => {
    // [8205, 9794].includes(char.codePointAt()) ? counter-- : char.codePointAt() >= 127995 && char.codePointAt() <= 127999 ? counter : counter++

    // // decimal
    // const connectorCharacters = [
    //   8205,
    //   9794,
    // ]
    // const skinTones = [
    //   127995,
    //   127996,
    //   127997,
    //   127998,
    //   127999,
    // ]
    // const code = char.codePointAt(0) ?? 0
    // if (connectorCharacters.includes(code)) {
    //   counter--
    // } else if (skinTones.includes(code)) {
    //   // skip counting
    // } else {
    //   counter++
    // }

    // hex
    const connectorCharacters = [
      '200d',
      '2642',
    ]
    const skinTones = [
      '1f3fb',
      '1f3fc',
      '1f3fd',
      '1f3fe',
      '1f3ff',
    ]
    const code = char.codePointAt(0)?.toString(16) ?? ''
    if (connectorCharacters.includes(code)) {
      counter--
    } else if (skinTones.includes(code)) {
      // skip counting
    } else {
      counter++
    }
  })

  return counter
}

export default {
  CharacterLength,
}

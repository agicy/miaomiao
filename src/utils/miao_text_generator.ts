const replacements = [
  { word: '也', replacement: '喵' },
  { word: '哉', replacement: '喵' },
  { word: '耶', replacement: '喵' },
  { word: '乎', replacement: '喵' },
  { word: '焉', replacement: '喵' },
  { word: '矣', replacement: '喵' },
  { word: '呜呼', replacement: '喵喵' },
]

export const convert_text = (text: string) => {
  let converted_html = text
  replacements.forEach(({ word, replacement }) => {
    converted_html = converted_html.replace(
      new RegExp(word, 'g'),
      `<strong>${replacement}</strong>`,
    )
  })
  return converted_html
}

const DISPLAY_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

export function convertDate(rawDate: string) {
  return new Date(rawDate).toLocaleDateString('ru-RU', DISPLAY_DATE_OPTIONS)
}
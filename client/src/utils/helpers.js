export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr));
}

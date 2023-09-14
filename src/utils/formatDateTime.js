export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  if (isNaN(dateTime.getTime())) {
    return "Data e hora inválidas";
  }

  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear();

  return `${day}/${month}/${year}`;
}

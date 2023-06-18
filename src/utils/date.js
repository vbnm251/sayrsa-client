export const pad = (d) => {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

export const parseDate = (date) => {
    const d = new Date(date);
    return pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
}
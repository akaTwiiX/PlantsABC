export function numberToString(value?: string | number | null): string {
    const number = typeof value === 'string' ? parseFloat(value) : value ?? 0;

    if (isNaN(number)) return '0,00';

    return number.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

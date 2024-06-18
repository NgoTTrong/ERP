export function formatNumberWithCommas(number?: number) {
    if (!number || number == 0) return 0;
    if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

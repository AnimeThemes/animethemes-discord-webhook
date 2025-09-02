export const joinWithLastSeparator = (array: Array<string>, separator: string, lastSeparator: string): string => {
    if (array.length === 0) return '';
    if (array.length === 1) return array[0];

    const allButLast = array.slice(0, -1).join(separator);
    const lastElement = array[array.length - 1];

    return allButLast + lastSeparator + lastElement;
};


/**
 * Formats the given datetime string
 * @param datetimeStr 
 * @returns 
 */
export const formatDatetimeStr = (datetimeStr: string) => {
    const datetime = new Date(datetimeStr)
    return `${datetime.toLocaleDateString('sl')} @ ${datetime.toLocaleTimeString('sl')}`
}

function ifeqString(valueA: string, valueB: string, execute: (arg0: string) => any) {
    const ta = typeof valueA
    const tb = typeof valueB
    if (ta !== tb || ta !== 'string' || valueA !== valueB) {
        return false
    }
    return execute(valueA)
}

function ifeqNumber(valueA: number, valueB: number, execute: (arg0: number) => any) {
    const ta = typeof valueA
    const tb = typeof valueB
    if (ta !== tb || ta !== 'number' || valueA !== valueB) {
        return false
    }
    return execute(valueA)
}

export {
    ifeqNumber,
    ifeqString
}

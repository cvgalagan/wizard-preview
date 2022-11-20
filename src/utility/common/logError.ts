const prefix = "Wizard Preview"

export const logError = (error: unknown, ...args: unknown[]) => {
    console.error(`${prefix} error:`, ...args, error)
}

export const logDebug = (...args: unknown[]) => {
    console.debug(`${prefix} debug:`, ...args)
}

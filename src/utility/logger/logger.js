import log from "loglevel";

const isDevelopment = import.meta.env.MODE === "development";

const createNamedLogger = (name="rewardPointCalculator") => {
    const logger = log.getLogger(name);
    logger.setLevel(isDevelopment ? "debug" : "warn");

    return {
        trace: (...args) => logger.trace(`[${name} TRACE]`, ...args),
        debug: (...args) => logger.debug(`[${name} DEBUG]`, ...args),
        info: (...args) => logger.info(`[${name} INFO]`, ...args),
        warn: (...args) => logger.warn(`[${name} WARN]`, ...args),
        error: (...args) => logger.error(`[${name} ERROR]`, ...args),
    };
};




export const rewardLogger = createNamedLogger("rewardPointCalculator");
// Function to log API errors with detailed info
export const rewardPointApiError = (error, endpoint) => {
    if (error.response) {
      rewardLogger.error(`[API ERROR] ${endpoint} - Status: ${error.response.status} - Message:`, error.response.data);
    } else if (error.request) {
      rewardLogger.error(`[API ERROR] ${endpoint} - No response received`);
    } else {
      rewardLogger.error(`[API ERROR] ${endpoint} - ${error.message}`);
    }
  };


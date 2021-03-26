/**
 * Convert locale from react-intl BCP 47 language code, to Liferay standard
 *
 * @param {string} string
 * @returns {string} A locale string (e.g. `fi_FI`).
 */
export const fromReactIntl = string => {
    return string.replace('-', '_');
};

/**
 * Convert locale from Liferay standard to react-intl BCP 47 language code
 *
 * @param {string} string
 * @returns {string} A string (e.g. `fi-FI`).
 */
export const toReactIntl = string => {
    return string.replace('_', '-');
};

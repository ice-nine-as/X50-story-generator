export function isSubstitutionValue(maybe) {
    return typeof maybe === 'string' &&
        maybe.length > 0 &&
        /^[^{}]+$/.test(maybe);
}
export default isSubstitutionValue;

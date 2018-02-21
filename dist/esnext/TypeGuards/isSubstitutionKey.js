export function isSubstitutionKey(maybe) {
    return typeof maybe === 'string' && /^{{[^{}]+}}$/.test(maybe);
}
export default isSubstitutionKey;

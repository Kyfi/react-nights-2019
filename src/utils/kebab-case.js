export const kebabCase = ( value ) => {
  const kebabed = value.split(/[_\s]/).join("-")
  return kebabed
}

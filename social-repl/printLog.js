/* global assert */

function bigintReplacer (_, arg) {
  if (typeof arg === 'bigint') {
    return Number(arg)
  }
  return arg
}

export function makePrintLog () {
  return function printLog (...args) {
    const rendered = args.map(arg =>
      typeof arg === 'string' ? arg : JSON.stringify(arg, bigintReplacer)
    )
    console.log(rendered.join(''))
  }
}

export function serialize (...args) {
  const rendered = args.map(arg => assert.quote(arg)).join(' ')
  return rendered
}

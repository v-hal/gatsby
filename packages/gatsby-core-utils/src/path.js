const path = require(`path`)
const os = require(`os`)

/**
 * @type {import('../index').joinPath}
 */
export function joinPath(...paths) {
  const joinedPath = path.join(...paths)
  if (os.platform() === `win32`) {
    return joinedPath.replace(/\\/g, `\\\\`)
  }

  return joinedPath
}

// copied from https://runpkg.com/?pretty-error@2.1.1/lib/nodePaths.js
// and added `^internal/` test
const nodePaths = [
  /^_debugger.js$/,
  /^_http_agent.js$/,
  /^_http_client.js$/,
  /^_http_common.js$/,
  /^_http_incoming.js$/,
  /^_http_outgoing.js$/,
  /^_http_server.js$/,
  /^_linklist.js$/,
  /^_stream_duplex.js$/,
  /^_stream_passthrough.js$/,
  /^_stream_readable.js$/,
  /^_stream_transform.js$/,
  /^_stream_writable.js$/,
  /^_tls_legacy.js$/,
  /^_tls_wrap.js$/,
  /^assert.js$/,
  /^buffer.js$/,
  /^child_process.js$/,
  /^cluster.js$/,
  /^console.js$/,
  /^constants.js$/,
  /^crypto.js$/,
  /^dgram.js$/,
  /^dns.js$/,
  /^domain.js$/,
  /^events.js$/,
  /^freelist.js$/,
  /^fs.js$/,
  /^http.js$/,
  /^https.js$/,
  /^module.js$/,
  /^net.js$/,
  /^os.js$/,
  /^path.js$/,
  /^punycode.js$/,
  /^querystring.js$/,
  /^readline.js$/,
  /^repl.js$/,
  /^smalloc.js$/,
  /^stream.js$/,
  /^string_decoder.js$/,
  /^sys.js$/,
  /^timers.js$/,
  /^tls.js$/,
  /^tty.js$/,
  /^url.js$/,
  /^util.js$/,
  /^vm.js$/,
  /^zlib.js$/,
  /^node.js$/,
  /^internal[/\\]/,
]

/**
 * @type {import('../index').isNodePath}
 */
export const isNodePath = fileName =>
  nodePaths.some(regTest => regTest.test(fileName))

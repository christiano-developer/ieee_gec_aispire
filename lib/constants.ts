/**
 * BASE_PATH must match the `basePath` value in next.config.ts.
 * It is used wherever Next.js does NOT automatically prepend the base path:
 *   - Native <video> / <source> src attributes
 *   - Inline style={{ backgroundImage: `url(...)` }}
 *   - Tailwind arbitrary bg-[url(...)] classes (replace with inline style instead)
 *   - JS-constructed download / href strings
 *
 * For `next/image` and `next/link`, simply use an absolute path starting with "/"
 * and Next.js will prepend basePath automatically — no need for this constant there.
 */
const BASE_PATH = "/ieee_gec_aispire";

export default BASE_PATH;

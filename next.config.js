/** @type {import('next').NextConfig} */
const nextConfig = {
    //Enables static export 
    output: 'export',
    //NextJS appends / to end of URLs, redirects a page e.g. /About to /About/ (otherwise results in a 404) - URLs without trailing slashes are redirected to their counterparts with trailing slashes, fixes page access issue
    trailingSlash: true,
}

module.exports = nextConfig

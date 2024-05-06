// module.exports = {
//     future: {
//         webpack5: true,
//     },
//     webpack(config) {
//         config.resolve.fallback = {
//             ...config.resolve.fallback,
//             fs: false,
//         }

//         return config
//     },
// }

// const nextConfig = {
//     webpack: (config, { isServer }) => {
//         if (!isServer) {
//             config.resolve.fallback = { fs: false, module: false }
//         }
//         return config
//     },
//     transpilePackages: [
//         'antd',
//         'rc-util',
//         '@babel/runtime',
//         '@ant-design/icons',
//         '@ant-design/icons-svg',
//         'rc-pagination',
//         'rc-picker',
//         'rc-tree',
//         'rc-table',
//         '@babel/runtime/helpers/esm',
//     ],
// }

// module.exports = nextConfig

// const withTM = require('next-transpile-modules')([
//     'antd',
//     'rc-util',
//     '@babel/runtime',
//     '@ant-design/icons',
//     '@ant-design/icons-svg',
//     'rc-pagination',
//     'rc-picker',
//     'rc-tree',
//     'rc-table',
//     '@babel/runtime/helpers/esm', // Add this line to include your desired module
// ])

// const nextConfig = {
//     webpack: (config, { isServer }) => {
//         if (!isServer) {
//             config.resolve.fallback = { fs: false, module: false }
//         }
//         return config
//     },
// }

// module.exports = withTM(nextConfig)

const withTM = require('next-transpile-modules')([
    'antd', // Assuming you want to transpile Ant Design
    'rc-util', // Utilities used by Ant Design components
    '@babel/runtime/helpers/esm', // For correctly handling Babel helpers in ES module format
    '@ant-design/icons', // For Ant Design icons
    '@ant-design/icons-svg', // SVG handling for Ant Design icons
    'rc-pagination', // Pagination component used in some UI libraries
    'rc-picker', // Picker component for date and time pickers
    'rc-tree', // Tree component used in UI libraries
    'rc-table', // Table component used in UI libraries
])

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Adjust Webpack settings for client-side specific fallbacks
            config.resolve.fallback = { fs: false, module: false }
        }
        return config
    },
    reactStrictMode: true, // It's good to enable React strict mode for catching potential issues in development
}

module.exports = withTM(nextConfig)

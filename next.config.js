/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	images: {
		unoptimized: true, // 对于静态导出需要
	},
	basePath: '/TWINBLADES', // 如果你的仓库名不是 username.github.io
	assetPrefix: '/TWINBLADES/', // 同上

	output: 'export',
}

module.exports = nextConfig

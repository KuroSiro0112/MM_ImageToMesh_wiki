import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/MM_ImageToMesh_wiki/',
    title: "MM_ImageToMesh",
    description: "Maya Image to Mesh Tool Documentation",
    lang: 'ja-JP',
    appearance: 'dark',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'ホーム', link: '/' },
            { text: 'ヘルプ', link: '/guide/usage' }
        ],

        sidebar: [
            {
                text: 'ヘルプ',
                items: [
                    { text: 'インストール', link: '/guide/installation' },
                    { text: '機能・使い方', link: '/guide/usage' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/KuroSiro0112/MM_ImageToMesh' }
        ]
    }
})

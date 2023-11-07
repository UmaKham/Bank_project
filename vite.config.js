// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'pages/login/index.html'),
        signUp: resolve(__dirname, 'pages/signUp/index.html'),
        my_wallets: resolve(__dirname, 'pages/my_wallets/index.html'),
        my_transactions: resolve(__dirname, 'pages/my_transactions/index.html'),
        addWallet: resolve(__dirname, 'pages/addWallet/index.html'),
        addTransaction: resolve(__dirname, 'pages/addTransaction/index.html'),
        about_wallet: resolve(__dirname, 'pages/about_wallet/index.html')
      },
    },
  },
})
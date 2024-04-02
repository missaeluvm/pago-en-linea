/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/components/*.{vue,css}',
    './src/css/*.{css}',
    './src/views/*.{vue,css}',
    './src/*.{html,js,vue,css}',
  ],
  theme: {
    extend: {
      colors: {
        'uvm-color-primario': '#d9272e',      
        'uvm-color-divisor': '#73848c',
        'uvm-color-titulo': '#353535',
        'uvm-color-texto': '#757575',
      },
      fontSize: {
        'uvm-titulo': '2em',
        'uvm-subtitulo': '1.5em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    
  ],
}


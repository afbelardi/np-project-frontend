module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamiy: {
        "fatface": ["Abril FatFace", "sans-serif"]
      },
      height: {
        '100': '100px',
        '120': '120px',
        "80%": "80%",
      },
      width: {
        "70%": "70%",
        "80%": "80%",
        "85%": "85%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
      },
      margin: {
        "20px": "20px",
        "40px": "40px",
        "60px": "60px",
        "80px": "80px",
        "-200px": "-200px",
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    screens: {
      'sm': "500px",
      "md": "740px",
    },
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
        "5px": "5px",
        "20px": "20px",
        "40px": "40px",
        "60px": "60px",
        "80px": "80px",
        "-200px": "-200px",
      },
      maxWidth: {
        "30%": "30%",
        "40%": "40%",
        "60%": "60%",
      },
      maxHeight: {
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
      },
      minWidth: {
        "40%": "40%"
      }
    },
  },
  plugins: [],
}

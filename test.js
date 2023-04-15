fetch("http://157.245.241.86", {
    consumerKey: "ck_cfa74d3daef696fc1232eca6f8218ea146d77f4e", // Your consumer key
    consumerSecret: "cs_cfd94ec946b43316fd0fb4f27e33bb54e5676279", // Your consumer secret
    version: "wc/v3", // WooCommerce WP REST API version
    
  })
  .then(resp=> resp)
  .then(data=>console.log(data))
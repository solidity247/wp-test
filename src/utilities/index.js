// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "http://157.245.241.86",
  consumerKey: "ck_cfa74d3daef696fc1232eca6f8218ea146d77f4e", // Your consumer key
  consumerSecret: "cs_cfd94ec946b43316fd0fb4f27e33bb54e5676279", // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

WooCommerce.get("products/13")
  // fetch("http://157.245.241.86/wp-json/wc/v3/products/13).then(response => response.json())
  .then((response) => {
    console.log(response.dat.images);
  })
  .catch((error) => {
    console.log(error.response.data);
  });


  export default WooCommerce;
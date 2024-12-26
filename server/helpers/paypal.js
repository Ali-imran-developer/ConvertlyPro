const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AY2BxszXWuLvSOLe8ibU913AqSnZjX-kORfswh3zEifnfXU7g1L9f5IAyVFFHx9v5gqEThd5RM_cvbl5",
  client_secret: "EOH_x6vrOxGX6IRRxuQfOuCT-AMocQm4i6eqYm0Qlz_QIel2DAxAj1L9WVP2qGrBRAMQu0bXUfsvXViS",
});

module.exports = paypal;
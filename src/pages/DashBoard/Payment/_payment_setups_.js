/**
 * 1.install stripe and react stripe js
 * 2.create a checkout form with a card element (card elements contains: card number,expirations date,evs,zip code)
 * 3.create stripe account and get the publishable key pk
 * 4.get the card information
 * 5.crate payment method
 * 6.use test card test payment 
 * 7.on the server side install stripe: npm install --save stripe
 * 8.create payment intent api with payment method types['card']
 * make sure amount provide with cents (price * 100)
 * 9.call payment intent api to get client secret and store it in state
 * 10.use confirmCardPayment api with client secret and card info
 * 11.display confirm card and error
 * 12.display confirm card and success 
 * 13.do things after payments
 * 14.
 * 
 * 
 * */ 
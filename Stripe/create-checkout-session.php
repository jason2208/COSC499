<?php

include './stripe-php/init.php';
require 'vendor/autoload.php';
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
\Stripe\Stripe::setApiKey('sk_test_51KLk17HwR3sTNxk2NIWBjLfqi9LnPSN8g6fywciL5GtEXVvixi2tpO5IDn6uvXTdvh498tcPuiFjHEnZahVyWaQb00Zpe7gkUJ');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://localhost/stripe/public';

$checkout_session = \Stripe\Checkout\Session::create([
  'customer_email' => 'customer@example.com',
  'submit_type' => 'donate',
  'billing_address_collection' => 'required' =>[
    'allowed_countries' => ['US', 'CA'],
  ],
  'line_items' => [[
    # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
    'price' => '{{PRICE_ID}}',
    'quantity' => 1,
  ]],
  'mode' => 'payment',
    'success_url' => $YOUR_DOMAIN . '/success.html',
    'cancel_url' => $YOUR_DOMAIN . '/cancel.html',
]);

header("HTTP/1.1 303 See Other");
header("Location: " . $checkout_session->url);
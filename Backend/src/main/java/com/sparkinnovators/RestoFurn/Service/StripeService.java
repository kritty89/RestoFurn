package com.sparkinnovators.RestoFurn.Service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class StripeService
{

    @PostConstruct
public void init() {
        //@Value("${stripe.secret.key}")
        Stripe.apiKey = "sk_test_51PfVMmRrfzZH74QfGRu3xqIgHMwtGOLWglhFbhaKnwBtJ7TdWsCCLwv8aHELEm8qTCA2cQk1zOIJkV6XyCGGlwiB00vqtfEfqN";
}

public PaymentIntent createPaymentIntent(int amount, String currency) throws StripeException {
    PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
            .setAmount((long) amount)
            .setCurrency(currency)
            .build();

    return PaymentIntent.create(createParams);
}
}

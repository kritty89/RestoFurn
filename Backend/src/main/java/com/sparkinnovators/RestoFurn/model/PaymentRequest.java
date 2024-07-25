package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequest {

    private String token;
    private String name;
    private String email;
}

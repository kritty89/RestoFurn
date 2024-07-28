package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class OrderRequest {
    private Long userId;
    private Long productId;
}

package com.sparkinnovators.RestoFurn.configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dxwvqi2gl",
                "api_key", "449113914573567",
                "api_secret", "Kx15vmeH8pHpiiUXm0nkr7FAnXg",
                "secure", true
        ));
    }
}

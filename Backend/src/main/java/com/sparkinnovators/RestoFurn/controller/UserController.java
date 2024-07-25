package com.sparkinnovators.RestoFurn.controller;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import com.sparkinnovators.RestoFurn.Entity.Product;
import com.sparkinnovators.RestoFurn.Entity.User;
import com.sparkinnovators.RestoFurn.Service.EmailService;
import com.sparkinnovators.RestoFurn.Service.EmployeeService;
import com.sparkinnovators.RestoFurn.Service.ProductService;
import com.sparkinnovators.RestoFurn.model.*;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import com.sparkinnovators.RestoFurn.repository.ProductRepository;
import com.sparkinnovators.RestoFurn.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/restofurn")
public class UserController {

    static {
        Stripe.apiKey = "sk_test_51PfVMmRrfzZH74QfGRu3xqIgHMwtGOLWglhFbhaKnwBtJ7TdWsCCLwv8aHELEm8qTCA2cQk1zOIJkV6XyCGGlwiB00vqtfEfqN";
    }


    private final DonationRepository donationRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final EmailService emailService;
    private final ProductService productService;


    @Autowired
    private EmployeeService employeeService;

    @Autowired
    public UserController(final DonationRepository donationRepository, UserRepository userRepository,
                          ProductRepository productRepository, EmailService emailService, ProductService productService) {
        this.donationRepository = donationRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.emailService = emailService;
        this.productService = productService;
    }

    @PostMapping(value = "/donation")
    public ResponseEntity<String> processDonationDetail(@RequestBody final DonationRequest donationRequest) {
        if (null != donationRequest) {
            System.out.println("donationRequest :: " + donationRequest.toString());
            Donation donationEntity = new Donation();
            donationEntity.setName(donationRequest.getName());
            donationEntity.setStreetAddress(donationRequest.getStreetAddress());
            donationEntity.setCity(donationRequest.getCity());
            donationEntity.setPostalCode(donationRequest.getPostalCode());
            donationEntity.setPhoneNumber(donationRequest.getContact());
            donationEntity.setEmailId(donationRequest.getEmailId());
            donationEntity.setFurnitureCount(donationRequest.getFurnitureCount());
            donationEntity.setDescription(donationRequest.getDescription());
            donationEntity.setPickupDate(new Date());
            donationEntity.setPickupTime(new Date());

            donationRepository.save(donationEntity);

            String subject = "Donation Pickup Scheduled";
            String text = "Dear "+ donationEntity.getName() + ",\nThank you for your donation! Your pickup is scheduled for "
                    + donationEntity.getPickupDate() + "\n Please find the details below: \n\n"
                    + "Name: "+ donationEntity.getName()+"\n"
                    + "Contact: +1 "+ donationEntity.getPhoneNumber()+"\n"
                    + "Furniture#: "+ donationEntity.getFurnitureCount()+"\n"
                    + "Address: "+ donationEntity.getStreetAddress()+", "+donationEntity.getCity()+" - "+donationEntity.getPostalCode()
                    +"\n\n\nThis is an auto generated email. Please do not reply to this email. In case of enquiries please contact our customer support" +
                    "@ +1 123 456 7890";
            emailService.sendSimpleMessage(donationEntity.getEmailId(), subject, text);

        } else {
            System.out.println("donationRequest not success ");
        }
        return ResponseEntity.ok("Donation Successful! Confirmation sent via Email");

    }

    @PostMapping(value = "/register")
    public ResponseEntity<String> processRegisterDetail(@RequestBody final UserRegistration userRegistration) {
        if (null != userRegistration) {
            System.out.println("userRegistration :: " + userRegistration.toString());
            User userEntity = new User();
            userEntity.setFirstName(userRegistration.getFirstName());
            userEntity.setLastName(userRegistration.getLastName());
            userEntity.setEmail(userRegistration.getEmail());
            userEntity.setPassword(userRegistration.getPassword());
            userRepository.save(userEntity);

            List<Product> productList = (List<Product>) productRepository.findAll();
        } else {
            System.out.println("Registration not success ");
        }
        return ResponseEntity.ok("OK");

    }

    @PostMapping(value = "/products")
    public ResponseEntity<List<ProductDetail>> processProductDetail() {
        List<Product> productList = (List<Product>) productRepository.findAll();
        List<ProductDetail> pdList = new ArrayList<>();
        if (!productList.isEmpty()) {

            for (Product p : productList) {
                ProductDetail pd = new ProductDetail();

                pd.setId(p.getId());
                pd.setFurnitureName(p.getFurnitureName());
                pd.setFurnitureType(p.getFurnitureType());
                pd.setMaterial(p.getMaterial());
                pd.setPrice(p.getPrice());
                pd.setFurnitureStatus(p.getFurnitureStatus());
                pd.setInStock(p.getInStock());
                pd.setCoverImage(p.getCoverImage());
                pd.setDescription(p.getDescription());

                pdList.add(pd);
            }
        }
        System.out.println(" success " + pdList.size());
        return ResponseEntity.ok(pdList);

    }

    @PostMapping(value = "/productdetail/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/filter")
    public ResponseEntity<List<Product>> getFilteredProducts(@RequestBody ProductFilter filter) {
        List<Product> products = productService.getFilteredProducts(filter);
        return ResponseEntity.ok(products);
    }

    @PostMapping(value = "/elogin")
    public ResponseEntity<String> employeeLogin(@RequestBody final EmployeeData employeeData) {
        System.out.println("employeeData :: " + employeeData.toString());

       /* if (null != employeeData) {
            System.out.println("employeeData :: " + employeeData.toString());
            Employee employee = EmployeeService.authenticate(employeeData.getEmail(), employeeData.getPassword());
            if (employee != null) {
                return ResponseEntity.ok(employee.getFirstName());
            }
            return ResponseEntity.status(401).body("Invalid email or password");
        }*/

        return ResponseEntity.ok("OK");
    }
    @PostMapping("/process-payment")
    public ResponseEntity<String> processPayment(@RequestBody PaymentRequest paymentRequest) {
        Map<String, Object> params = new HashMap<>();
        params.put("amount", 1000);
        params.put("currency", "usd");
        params.put("description", "Example charge");
        params.put("source", paymentRequest.getToken());

        try {
            Charge charge = Charge.create(params);
            return ResponseEntity.ok("Payment successful!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Payment failed: " + e.getMessage());
        }
    }
}
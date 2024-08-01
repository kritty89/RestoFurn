package com.sparkinnovators.RestoFurn.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sparkinnovators.RestoFurn.Entity.*;
import com.sparkinnovators.RestoFurn.Service.*;
import com.sparkinnovators.RestoFurn.model.*;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import com.sparkinnovators.RestoFurn.repository.ProductRepository;
import com.sparkinnovators.RestoFurn.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/restofurn")
public class ProcessController {
    private final DonationRepository donationRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final EmailService emailService;
    private final ProductService productService;
    private final EmployeeService employeeService;
    private final OrderService orderService;
    private final UserService userService;
    private final Cloudinary cloudinary;

    @Autowired
    public ProcessController(final DonationRepository donationRepository, UserRepository userRepository,
                             ProductRepository productRepository, EmailService emailService, ProductService productService,
                             EmployeeService employeeService, OrderService orderService, UserService userService, Cloudinary cloudinary) {
        this.donationRepository = donationRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.emailService = emailService;
        this.productService = productService;
        this.employeeService = employeeService;
        this.orderService = orderService;
        this.userService = userService;
        this.cloudinary = cloudinary;
    }

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostMapping(value = "/donation")
    public ResponseEntity<String> processDonationDetail(@RequestBody final DonationRequest donationRequest) {
        if (null != donationRequest) {
            System.out.println("donationRequest :: " + donationRequest.toString());
            Donation donationEntity = new Donation();
            donationEntity.setName(donationRequest.getName());
            donationEntity.setStreetAddress(donationRequest.getStreetAddress());
            donationEntity.setCity(donationRequest.getCity());
            donationEntity.setPostalCode(donationRequest.getPostalCode());
            donationEntity.setPhoneNumber(donationRequest.getPhone());
            donationEntity.setEmailId(donationRequest.getEmail());
            donationEntity.setFurnitureCount(donationRequest.getFurnitureCount());
            donationEntity.setDescription(donationRequest.getDescription());
            donationEntity.setPickupDateTime(donationRequest.getPickupDateTime());

            donationRepository.save(donationEntity);

            String subject = "Donation Pickup Scheduled";
            String text = "Dear "+ donationEntity.getName() + ",\nThank you for your donation! Your pickup is scheduled for "
                    + donationEntity.getPickupDateTime() + "\n Please find the details below: \n\n"
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
            userEntity.setPhone(userRegistration.getPhone());
            userEntity.setStreetAddress(userRegistration.getStreetAddress());
            userEntity.setCity(userRegistration.getCity());
            userEntity.setState(userRegistration.getState());
            userEntity.setCountry(userRegistration.getCountry());
            userEntity.setPostalCode(userRegistration.getPostalCode());
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

    @PostMapping(value = "/active-products")
    public ResponseEntity<List<ProductDetail>> fetchActiveProduct() {
        List<Product> productList = (List<Product>) productRepository.findProductsByInStock("y");
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

    @PostMapping(value = "/all-donations")
    public ResponseEntity<List<DonationRequest>> fetchDonations() {
        List<Donation> donationList = (List<Donation>) donationRepository.findAll();
        List<DonationRequest> dList = new ArrayList<>();
        if (!donationList.isEmpty()) {

            for (Donation d : donationList) {
                DonationRequest dr = new DonationRequest();

                dr.setId(d.getId());
                dr.setName(d.getName());
                dr.setStreetAddress(d.getStreetAddress());
                dr.setCity(d.getCity());
                dr.setPostalCode(d.getPostalCode());
                dr.setState(d.getState());
                dr.setCountry(d.getCountry());
                dr.setPhone(d.getPhoneNumber());
                dr.setEmail(d.getEmailId());
                dr.setFurnitureCount(d.getFurnitureCount());
                dr.setDescription(d.getDescription());
                dr.setPickupDateTime(d.getPickupDateTime());
                dr.setStatus(d.getStatus());
                dList.add(dr);
            }
        }
        System.out.println(" success " + dList.size());
        return ResponseEntity.ok(dList);
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
    public ResponseEntity<?> employeeLogin(@RequestBody final EmployeeData employeeData) {
        System.out.println("employeeData :: " + employeeData.toString());

        if (employeeData != null) {
            System.out.println("employeeData :: " + employeeData.toString());
            Employee employee = employeeService.authenticate(employeeData.getEmail(), employeeData.getPassword());
            if (employee != null) {
                return ResponseEntity.ok(employee);
            }
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        return ResponseEntity.ok("OK");
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> userLogin(@RequestBody final UserData userData) {
        System.out.println("userData :: " + userData.toString());

        if (userData != null) {
            System.out.println("userData :: " + userData.toString());
            User user = userService.authenticate(userData.getEmail(), userData.getPassword());
            if (user != null) {
                return ResponseEntity.ok(user);
            }
            return ResponseEntity.status(401).body("Invalid email or password");
        }
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

    @PostMapping("/product")
    public ResponseEntity<Product> createProduct(@RequestPart("product") String productString,
                                                 @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {
        try {
            Product product = new ObjectMapper().readValue(productString, Product.class);
            String imageUrl = null;
            if (imageFile != null && !imageFile.isEmpty()) {
                imageUrl = productService.uploadImageToCloudinary(imageFile);
            }
            product.setCoverImage(imageUrl);
            Product savedProduct = productService.saveProduct(product);
            return ResponseEntity.ok(savedProduct);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,
                                                 @RequestPart("product") String productString,
                                                 @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {
        try {
            Product product = new ObjectMapper().readValue(productString, Product.class);
            String imageUrl = null;
            if (imageFile != null && !imageFile.isEmpty()) {
                imageUrl = productService.uploadImageToCloudinary(imageFile);
            }
            product.setCoverImage(imageUrl);
            Product updatedProduct = productService.updateProduct(id, product);
            return ResponseEntity.ok(updatedProduct);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestBody Transaction transaction) {
        Order createdOrder = orderService.createOrderWithTransaction(order, transaction);
        return ResponseEntity.ok(createdOrder);
    }

    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = (String) uploadResult.get("url");
            return ResponseEntity.ok(imageUrl);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
        }
    }

    @PostMapping("/create-payment-intent")
    public ResponseEntity<Map<String, String>> createPaymentIntent(@RequestBody Map<String, Object> request) {
        Stripe.apiKey = stripeApiKey;

        int amount = (int) request.get("amount");

        PaymentIntentCreateParams params =
                PaymentIntentCreateParams.builder()
                        .setAmount((long) amount)
                        .setCurrency("usd")
                        .build();

        try {
            PaymentIntent intent = PaymentIntent.create(params);
            Map<String, String> responseData = new HashMap<>();
            responseData.put("clientSecret", intent.getClientSecret());
            return ResponseEntity.ok(responseData);
        } catch (StripeException e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}

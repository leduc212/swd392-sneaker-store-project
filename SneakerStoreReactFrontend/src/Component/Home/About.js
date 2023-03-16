import React from 'react'

export default function About() {
  return (
    <div>
        <section class="bg-success py-5">
    <div class="container">
        <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
                <h1>About Us</h1>
                <p>
                    At Sneaky, we're passionate about sneakers and believe that every step should be taken in style. We offer a wide range of high-quality sneakers from the most sought-after brands to ensure that you can find the perfect pair to match your unique style. Thank you for choosing Sneaky for your sneaker needs, we can't wait to help you step up your sneaker game!
                </p>
            </div>
            <div class="col-md-4">
                <img src="./img/about-hero.svg" alt="About Hero"/>
            </div>
        </div>
    </div>
</section>

<section class="container py-5">
    <div class="row text-center pt-5 pb-3">
        <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
                Sneaky offers a variety of services including knowledgeable staff, online shopping with fast shipping, and sneaker care products to provide a comprehensive sneaker shopping experience.
            </p>
        </div>
    </div>
    <div class="row">

        <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center"><i class="fa fa-truck fa-lg"></i></div>
                <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center"><i class="fas fa-exchange-alt"></i></div>
                <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center"><i class="fa fa-percent"></i></div>
                <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center"><i class="fa fa-user"></i></div>
                <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
        </div>
    </div>
</section>

<section class="bg-light py-5">
    <div class="container my-4">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Our Brands</h1>
                <p>
                    We carry a wide range of the most sought-after sneaker brands to ensure that our customers have access to the latest trends and classic styles.
                </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
                <div class="row d-flex flex-row">

                    <div class="col-1 align-self-center">
                        <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                            <i class="text-light fas fa-chevron-left"></i>
                        </a>
                    </div>

                    <div class="col">
                        <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">

                            <div class="carousel-inner product-links-wap" role="listbox">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/Converse_shoe_company_logo.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_02.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_03.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/Vans-Logo.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/palladium-logo-72601E9E86-seeklogo.com.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/puma-logo-png-1.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/reebok-hd-logo-picture-4.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/Skechers.svg.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_01.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_02.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_03.png" alt=""/></a>
                                        </div>
                                        <div class="col-3 p-md-5">
                                            <a href="/#"><img class="img-fluid brand-img" src="./img/brand_04.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-1 align-self-center">
                        <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                            <i class="text-light fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

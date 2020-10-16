import React,{useEffect,useReducer} from 'react';
import Instagram from '../../components/Instagram';
import LazyLoad from '../../components/LazyLoad';
import Category from './components/Category';
import ProductList from './components/ProductList'
import {Type, Reducer} from './Reducer';
function Home() {

    useEffect(LazyLoad, [])

    let [state,dispatch] = useReducer(Reducer,{
        section1:[],
        productList: []
    })

    useEffect(loadData,[])
    useEffect(()=>{
        loadData(res =>{
            dispatch({type: Type.INIT_DATA, data: res})
        })
    },[])


    function loadData(callback){
        fetch("/data/home.json")
        .then(res => res.json())
        .then(callback)
    }
    return (
        <div className="home-wrapper">
            <div>
                <Category data={state.section1}/>
                {/* Categories Section End */}
                {/* Product Section Begin */}
                <ProductList data={state.productList}/>
                {/* Product Section End */}
                {/* Banner Section Begin */}
                <section className="banner set-bg" data-setbg="img/banner/banner-1.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 m-auto">
                                <div className="banner__slider owl-carousel">
                                    <div className="banner__item">
                                        <div className="banner__text">
                                            <span>The Chloe Collection</span>
                                            <h1>The Project Jacket</h1>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                    <div className="banner__item">
                                        <div className="banner__text">
                                            <span>The Chloe Collection</span>
                                            <h1>The Project Jacket</h1>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                    <div className="banner__item">
                                        <div className="banner__text">
                                            <span>The Chloe Collection</span>
                                            <h1>The Project Jacket</h1>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner Section End */}
                {/* Trend Section Begin */}
                <section className="trend spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Hot Trend</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-1.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Chain bucket bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-2.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Pendant earrings</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/ht-3.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Best seller</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-1.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-2.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/bs-3.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Round leather bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Feature</h4>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-1.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Bow wrap skirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-2.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Metallic earrings</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src="img/trend/f-3.jpg" alt />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>Flap cross-body bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Trend Section End */}
                {/* Discount Section Begin */}
                <section className="discount">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 p-0">
                                <div className="discount__pic">
                                    <img src="img/discount.jpg" alt />
                                </div>
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="discount__text">
                                    <div className="discount__text__title">
                                        <span>Discount</span>
                                        <h2>Summer 2019</h2>
                                        <h5><span>Sale</span> 50%</h5>
                                    </div>
                                    <div className="discount__countdown" id="countdown-time">
                                        <div className="countdown__item">
                                            <span>22</span>
                                            <p>Days</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span>18</span>
                                            <p>Hour</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span>46</span>
                                            <p>Min</p>
                                        </div>
                                        <div className="countdown__item">
                                            <span>05</span>
                                            <p>Sec</p>
                                        </div>
                                    </div>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Discount Section End */}
                {/* Services Section Begin */}
                <section className="services spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-car" />
                                    <h6>Free Shipping</h6>
                                    <p>For all oder over $99</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-money" />
                                    <h6>Money Back Guarantee</h6>
                                    <p>If good have Problems</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-support" />
                                    <h6>Online Support 24/7</h6>
                                    <p>Dedicated support</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-headphones" />
                                    <h6>Payment Secure</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Services Section End */}
                {/* Instagram Begin */}
                <Instagram/>
            </div>

        </div>
    )
}

export default Home

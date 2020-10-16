import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import LazyLoad from '../../../components/LazyLoad';


function Category({data}) {
    useEffect(LazyLoad,[data])
    return (
        <section className="categories">
            <div className="container-fluid">
                <div className="row">
                    {
                        data[0] && <div className="col-lg-6 p-0">
                        <div className="categories__item categories__large__item set-bg" data-setbg={data[0].img}>
                            <div className="categories__text">
                                <h1>{data[0].title}</h1>
                                <p>{data[0].desc}</p>
                                <NavLink to={data[0].link}>Shop nowaa</NavLink>
                            </div>
                        </div>
                    </div>
                    }
                    <div className="col-lg-6">
                        <div className="row">
                            {
                                data.slice(1).map(e =><div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                <div className="categories__item set-bg" data-setbg={data[0].img}>
                                    <div className="categories__text">
                                        <h4>{data[0].title}</h4>
                                        <p>358 items</p>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category

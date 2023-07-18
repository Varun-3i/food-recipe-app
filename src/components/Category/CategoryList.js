import React from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';
import './category.css';

const CategoryList = ({ categories }) => {
  return (
    <div className="section-wrapper bg-whitesmoke">
      <div className="container">
        <div className="sc-title">Categories</div>
        <section className="sc-category grid">
          {categories.map((category) => {
            const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

            return (
              <Link to={`/meal/category/${title}`} className="category-item align-center justify-center" key={id}>
                <div className="category-itm-img h-100 w-100 flex align-center justify-center">
                  <img src={thumbnail} alt={title} />
                  <div className="category-item-title bg-green">
                    <h3 className="text-white fs-11 fw-6 ls-1 text-uppercase">{title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        <br />
        <br />
        <div className="sc-title">Contact</div>
        <div className="contact">
          <div className="contact-container">
            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryList;

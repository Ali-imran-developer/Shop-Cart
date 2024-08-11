import React, { useState } from 'react';
import Ratting from "../Components/Ratting";

const reviwtitle = "Add a Review";
let ReviewList = [ 
    { imgUrl: "/src/assets/images/instructor/01.jpg", 
        imgAlt: "Client thumb", 
        name: "Ganelon Boileau", 
        date: "Posted on Jun 10, 2022 at 6:57 am", 
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", 
    }, 
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", 

    }, 
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", 

    }, 
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", 
    }, 
];

const Review = () => {
    const [ review , setReview] = useState(true);
  return (
    <>
        <ul className={`review-nav lab-ul ${review ? "RevActive" : "DescActive"}`}>
            <li className='desc rounded' onClick={() => setReview(!review)}>
                Description
            </li>
            <li className='rev rounded' onClick={() => setReview(!review)}>
                Reviews
            </li>
        </ul>   
        {/* desc and reviews content */}
        <div className={`review-content ${review ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul">
                    {
                        ReviewList.map((review , i) => (
                            <li key={i}>
                                <div className='post-thumb'>
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href="#">{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {/* add review field */}
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>
                        {/* form input */}
                        <form className='row' action="action">
                            <div className="col-md-4 col-12">
                                <input type="text" name="name" 
                                id="name" placeholder='Full Name *' />
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name="email" 
                                id="name" placeholder='Your Email *' />
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="rating">
                                    <span className='me-1'>Your Rating : </span>
                                    <Ratting/>
                                </div>
                            </div>
                            {/* message input */}
                            <div className="col-md-12 col-12">
                                <textarea name="message" id="message"
                                rows="8" placeholder="Type Here Message!">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button type='submit' className='default-button'>
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Error necessitatibus architecto sed autem quos exercitationem
                non esse laboriosam iste reiciendis asperiores beatae
                consectetur totam natus ex aperiam amet dolore, sit iure
                delectus culpa rem. Aspernatur quaerat iure earum placeat
                ad eos ab, ipsum quibusdam ducimus error nulla vel! Error
                quaerat distinctio fugiat ipsum consequuntur accusamus
                isi tempore sequi expedita, explicabo saepe repellat,
                asperiores rerum porro! Facere suscipit porro placeat
                ut!</p>
                {/* post item */}
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor sit amet consectetur voluptatibus excepturi aliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem ipsum  voluptatibus excepturi aliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem ipsum dolor sit amet consectetur voluptatibus excepturi aliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem ipsum dobus excepturi aliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem ipsum dolor sit amet consectetur voluptatibus excepturi aliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem ipsum dolor sit amet consectetur volaliquam ut aperiam fugit qui culpa!</li>
                            <li>Lorem  amet consectetur voluptatibus excepturi aliquam ut aperiam fugit qui culpa!</li>
                        </ul>
                    </div>
                </div>
                {/* after description */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Error necessitatibus architecto sed autem quos exercitationem
                non esse laboriosam iste reiciendis asperiores beatae
                consectetur totam natus ex aperiam amet dolore, sit iure
                delectus culpa rem. Aspernatur quaerat iure earum placeat
                ad eos ab, ipsum quibusdam ducimus error nulla vel! Error
                quaerat distinctio fugiat ipsum consequuntur accusamus
                isi tempore sequi expedita, explicabo saepe repellat,
                asperiores rerum porro! Facere suscipit porro placeat
                ut!</p>
            </div>
        </div>
    </>
  )
}

export default Review;

import React, { useEffect } from 'react';
import blogList from '../utilis/blogdata';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../Components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const SingleBlog = () => {
    const { id } = useParams();
    const blogId = Number(id);
    // 
    const currentBlogIndex = blogList.findIndex((b) => b.id === blogId);
    const currentBlog = blogList[currentBlogIndex];
    // 
    const previousBlog = blogList[currentBlogIndex - 1];
    const nextBlog = blogList[currentBlogIndex + 1];
    // 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    // 
    if (!currentBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            {/*  */}
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    <div className="post-thumb">
                                                        <img src={currentBlog.imgUrl} alt="" className='w-100' />
                                                    </div>
                                                    <div className='post-content'>
                                                        <h3>{currentBlog.title}</h3>
                                                        <div className='meta-post'>
                                                            <ul className="lab-ul">
                                                                {currentBlog.metaList.map((val, i) => (
                                                                    <li key={i}>
                                                                        <i className={val.iconName}></i>
                                                                        {val.text}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur,
                                                            adipisicing elit. Odit libero ad sequi
                                                            culpa corrupti recusandae incidunt.
                                                            Blanditiis voluptate magni minus.
                                                            Aperiam sequi exercitationem quos.
                                                            Quaerat eum architecto inventore
                                                            magni ipsa repellat maxime provident
                                                            consectetur dicta sunt reiciendis
                                                            ut vero nostrum in, fugit nihil
                                                            obcaecati illum eaque fuga illo
                                                            explicabo unde.
                                                        </p>
                                                        <blockquote>
                                                            <p>
                                                                “Our prime purpose in this life is to
                                                                help others. And if you can't help
                                                                them, at least don't hurt them. When
                                                                you practice being grateful, there
                                                                is a sense of respect toward others.”
                                                            </p>
                                                            <cite>
                                                                <a href="#">...Melissa Hunter</a>
                                                            </cite>
                                                        </blockquote>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur
                                                            adipisicing elit. Accusamus maxime ipsum
                                                            aliquid! Consectetur, ex mollitia
                                                            consequatur id doloribus sequi, eaque
                                                            itaque nobis recusandae repudiandae
                                                            eius. Accusantium minus optio molestias
                                                            esse!
                                                        </p>
                                                        <img
                                                            src="/src/assets/images/blog/single/01.jpg"
                                                            alt=""
                                                        />
                                                        <p>
                                                            Lorem ipsum dolor sit, amet consectetur
                                                            adipisicing elit. Fuga earum excepturi
                                                            aut, cumque aliquid magni delectus
                                                            aspernatur perspiciatis. Sint blanditi
                                                            maxime repellat nisi eaque eligendi
                                                            minima doloribus, aliquid numquam
                                                            quaerat vitae animi ut ipsa id culpa
                                                            repudiandae harum suscipit optio ullam
                                                            quo atque cum consequuntur. Magnam,
                                                            aspernatur. Quaerat, iusto aperiam!
                                                        </p>
                                                        <div className="video-thumb">
                                                            <img
                                                                src="/src/assets/images/blog/single/02.jpg"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="https://youtu.be/ZlbHdYMWSOA?si=UVONVLb6SHRU0z2M"
                                                                className='video-button popup' target='_blank'>
                                                                <i className='icofont-ui-play'></i>
                                                            </a>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing
                                                            elit. Harum ipsum, veritatis accusamus illum asperior
                                                            quaerat iure labore, minus numquam consequatur obcaeca
                                                            eius perspiciatis dicta error cupiditate? Quidem simi
                                                            lique at quasi eveniet eaque dolores tempore, ut ull
                                                            am et facere eum! Enim.
                                                        </p>
                                                        <div className='tags-section'>
                                                            <ul className="tags lab-ul">
                                                                <li><a href="#">Agency</a></li>
                                                                <li><a href="#">Bussinues</a></li>
                                                                <li><a href="#">Personal</a></li>
                                                            </ul>
                                                            <ul className="lab-ul social-icons">
                                                                {socialList.map((val, i) => (
                                                                    <li key={i}>
                                                                        <a href="#" className={val.className}>
                                                                            <i className={val.iconName}></i>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* {
                                                        result.map((item) => (
                                                            <div
                                                                key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt=""className='w-100'/>
                                                                </div>
                                                                <div className='post-content'>
                                                                    <h3>
                                                                        {item.title}
                                                                    </h3>
                                                                    <div className='meta-post'>
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur,
                                                                        adipisicing elit. Odit libero ad sequi
                                                                        culpa corrupti recusandae incidunt.
                                                                        Blanditiis voluptate magni minus.
                                                                        Aperiam sequi exercitationem quos.
                                                                        Quaerat eum architecto inventore
                                                                        magni ipsa repellat maxime provident
                                                                        consectetur dicta sunt reiciendis
                                                                        ut vero nostrum in, fugit nihil
                                                                        obcaecati illum eaque fuga illo
                                                                        explicabo unde.
                                                                    </p>
                                                                    <blockquote>
                                                                        <p>
                                                                            “Our prime purpose in this life is to
                                                                            help others. And if you can't help
                                                                            them, at least don't hurt them. When
                                                                            you practice being grateful, there
                                                                            is a sense of respect toward others.”
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">...Melissa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. Accusamus maxime ipsum
                                                                        aliquid! Consectetur, ex mollitia
                                                                        consequatur id doloribus sequi, eaque
                                                                        itaque nobis recusandae repudiandae
                                                                        eius. Accusantium minus optio molestias
                                                                        esse!
                                                                    </p>
                                                                    <img
                                                                        src="/src/assets/images/blog/single/01.jpg"
                                                                        alt=""
                                                                    />
                                                                    <p>
                                                                        Lorem ipsum dolor sit, amet consectetur
                                                                        adipisicing elit. Fuga earum excepturi
                                                                        aut, cumque aliquid magni delectus
                                                                        aspernatur perspiciatis. Sint blanditi
                                                                        maxime repellat nisi eaque eligendi
                                                                        minima doloribus, aliquid numquam
                                                                        quaerat vitae animi ut ipsa id culpa
                                                                        repudiandae harum suscipit optio ullam
                                                                        quo atque cum consequuntur. Magnam,
                                                                        aspernatur. Quaerat, iusto aperiam!
                                                                    </p>
                                                                    <div className="video-thumb">
                                                                        <img
                                                                            src="/src/assets/images/blog/single/02.jpg"
                                                                            alt=""
                                                                        />
                                                                        <a
                                                                            href="https://youtu.be/ZlbHdYMWSOA?si=UVONVLb6SHRU0z2M"
                                                                            className='video-button popup' target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                        elit. Harum ipsum, veritatis accusamus illum asperior
                                                                        quaerat iure labore, minus numquam consequatur obcaeca
                                                                        eius perspiciatis dicta error cupiditate? Quidem simi
                                                                        lique at quasi eveniet eaque dolores tempore, ut ull
                                                                        am et facere eum! Enim.
                                                                    </p>
                                                                    <div className='tags-section'>
                                                                        <ul className="tags lab-ul">
                                                                            <li><a href="#">Agency</a></li>
                                                                            <li><a href="#">Bussinues</a></li>
                                                                            <li><a href="#">Personal</a></li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        ))
                                                    } */}
                                                </div>
                                            </div>
                                            {/*  */}
                                            {/* <div className='navigations-part'>
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i>
                                                        Previous Blog
                                                    </a>
                                                    <a href="#" className="title">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Magni, dolorum.
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='prev'>
                                                        Next Blog
                                                        <i className='icofont-double-right'></i>

                                                    </a>
                                                    <a href="#" className="title">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Magni, dolorum.
                                                    </a>
                                                </div>
                                            </div> */}
                                            {/*  */}
                                            <div className='navigations-part'>
                                                <div className="left">
                                                    {previousBlog && (
                                                        <Link to={`/blog/${previousBlog.id}`} className='prev'>
                                                            <i className='icofont-double-left'></i>
                                                            Previous Blog
                                                        </Link>
                                                    )}
                                                    <a href="#" className="title">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Magni, dolorum.
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    {nextBlog && (
                                                        <Link to={`/blog/${nextBlog.id}`} className='next'>
                                                            Next Blog
                                                            <i className='icofont-double-right'></i>
                                                        </Link>
                                                    )}
                                                    <a href="#" className="title">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Magni, dolorum.
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlog;


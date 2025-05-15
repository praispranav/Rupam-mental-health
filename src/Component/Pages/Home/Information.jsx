import React from 'react';
import { courseData } from '../../../Data/HomeData';


const Information = () => {
    const tabItems = ['All', 'Workshops', 'Student Support', 'Educator Support', 'Self-Help'];

    const getCoursesByTab = (tab) => {
        if (tab === 'All') return courseData;
        return courseData.filter(course => course.category === tab);
    };

    return (
        <section id="guidance" className="p_3">
            <div className="container-xl">
                <div className="row course_1">
                    <div className="col-md-9">
                    <div className="course_1l">
                    <h3 className="mb-0">Information and Guidance</h3>
                </div>
                    </div>
                    <div className="col-md-3 text-end">
                    {/*<div className="course_1r">
                        <h6 className="mb-0">
                        <a className="button" href="/">View All Resources</a>
                    </h6>
                        </div>*/}
                    </div>
                </div>

                <div className="row course_2 mt-4">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs mb-0">
                            {tabItems.map((item, index) => (
                                <li key={item} className="nav-item d-inline-block me-2">
                                    <a
                                        href={`#tab${index}`}
                                        data-bs-toggle="tab"
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                    >
                                        <span className="d-md-block">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row course_3 mt-4">
                    <div className="tab-content">
                        {tabItems.map((tab, index) => (
                            <div key={index} className={`tab-pane ${index === 0 ? 'active' : ''}`} id={`tab${index}`}>
                                <div className="course_3i row mt-4">
                                    {getCoursesByTab(tab).length > 0 ? (
                                        getCoursesByTab(tab).map((course, i) => (
                                            <div key={i} className="col-md-4 mt-4">
                                                <div className="course_3im clearfix">
                                                    <div className="course_3im1 position-relative clearfix">
                                                        <div className="course_3im1i clearfix">
                                                            <figure className="effect-jazz mb-0">
                                                                <a href="/"><img src={course.image} className="w-100" alt="Course" /></a>
                                                            </figure>
                                                        </div>
                                                        <div className="course_3im1i1 position-absolute w-100 top-0 p-3">
                                                            <h6 className="mb-0">
                                                                <a className="bg_brown d-inline-block px-3 py-2 text-white font_14 rounded-3" href="/">
                                                                    {course.category}
                                                                </a>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="course_3im2 p-3 shadow_box">
                                                        <h6>
                                                            <img src={course.instructorImage} className="rounded-circle me-2" alt="Instructor" />
                                                            {course.instructor}
                                                        </h6>
                                                        <h5 className="mt-3 mb-3">
                                                            <a style={{color:'#1a2844'}} href="/">{course.title}</a>
                                                        </h5>
                                                        <span className="col_yell me-3">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i
                                                                    key={i}
                                                                    className={
                                                                        i + 1 <= course.rating
                                                                            ? 'fa fa-star'
                                                                            : i + 0.5 === course.rating
                                                                                ? 'fa fa-star-half-o'
                                                                                : 'fa fa-star-o'
                                                                    }
                                                                ></i>
                                                            ))}
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center"><p>No resources available under "{tab}" right now.</p>                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


  

export default Information;

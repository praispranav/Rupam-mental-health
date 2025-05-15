import React from 'react';

const categories = [
    { icon: "fa-heartbeat", title: "Counseling", bg: "bg-primary" },
    { icon: "fa-brain", title: "Mental Wellness", bg: "bg-info" },
    { icon: "fa-user-friends", title: "Peer Support", bg: "bg-warning" },
    { icon: "fa-spa", title: "Stress Relief", bg: "bg-success" },
    { icon: "fa-hand-holding-heart", title: "Self-Care", bg: "bg-secondary" },
    { icon: "fa-book-medical", title: "Therapy Resources", bg: "bg-danger" },
];

const Learn = () => {
    return (
        <div>
            <section id="learn" className="pt-5 pb-5 bg_light">
                <div className="container-xl">
                    <div className="learn_1 row text-center mb-4">
                        <h3 className="mb-0">Explore Mental Health Support</h3>
                    </div>
                    <div className="learn_2 row">
                        {categories.map((item, index) => (
                            <div className="col-md-2 col-sm-6 mb-3" key={index}>
                                <div className={`learn_2i ${item.bg} px-3 pt-4 pb-4 rounded-3 text-center`}>
                                    <span className="lh-1 font_60 text-white">
                                        <i className={`fa ${item.icon}`}></i>
                                    </span>
                                    <h6 className="mb-0 mt-3 text-white">{item.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                  {/*<div className="learn_3 row text-center mt-4">
                        <h6 className="mb-0">
                            <a className="button_1" href="/">View All Support Areas</a>
                        </h6>
                    </div>*/}
                </div>
            </section>
        </div>
    );
};

export default Learn;

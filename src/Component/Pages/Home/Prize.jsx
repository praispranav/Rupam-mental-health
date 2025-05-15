import React from 'react';

const Prize = () => {
  return (
    <div>
      <section id="prize">
        <div className="container-fluid p-0">
          <div className="prize_1 row mx-0">

            <div className="col-md-6 p-0">
              <div className="prize_1l bg_dark">
                <div className="prize_1li row">
                  <div className="col-md-4">
                    <div className="prize_1lil">
                      <span className="d-inline-block rounded-circle text-center bg-white font_60">
                        <i className="fa fa-heartbeat"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="prize_1lir">
                      <h3 className="text-white">Mental Wellness Awards</h3>
                      <p className="text-light mt-3">
                        Celebrating individuals and organizations that advocate for mental health, promote awareness, and create safe spaces for emotional healing.
                      </p>
                      <h6 className="mb-0 mt-4">
                        <a className="button bg-white text-black" href="/">Learn More</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="prize_1l bg_brown">
                <div className="prize_1li row">
                  <div className="col-md-4">
                    <div className="prize_1lil">
                      <span className="d-inline-block rounded-circle text-center bg-white font_60">
                        <i className="fa fa-leaf"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="prize_1lir">
                      <h3 className="text-white">Mindful Growth Program</h3>
                      <p className="text-light mt-3">
                        A transformative e-learning journey designed to build emotional resilience, manage stress, and encourage self-awareness and healing.
                      </p>
                      <h6 className="mb-0 mt-4">
                        <a className="button bg-white text-black" href="/">Explore Program</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Prize;

import React from 'react';
import '../../../Styles/component/home/spec.scss'

const Spec = () => {
  return (
    <section id="spec" className="p_3 bg_brown">
      <div className="container-xl">
        <div className="row spec_1">
          <div className="col-md-4">
            <div className="spec_1i">
              <h5 className="text-white fw-normal mb-0">
                <i className="fa fa-heartbeat me-2 font_60 lh-1 align-middle"></i>
                Over 1 Million Lives Touched
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="spec_1i">
              <h5 className="text-white fw-normal mb-0">
                <i className="fa fa-comments me-2 font_60 lh-1 align-middle"></i>
                250k+ Therapy Sessions Conducted
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="spec_1i">
              <h5 className="text-white fw-normal mb-0">
                <i className="fa fa-user-md me-2 font_60 lh-1 align-middle"></i>
                10,000+ Certified Mental Health Experts
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spec;

import React from 'react';
import image1 from '../../../Assests/1.jpg'
import image2 from '../../../Assests/2.jpg'

const Event = () => {
  return (
    <div>
    <section id="event" class="p_3 bg_dark">
    <div class="container-xl">
      <div class="event_1 row">
       <div class="col-md-5">
        <div class="event_1l">
          <div class="center_h1r rounded-3">
          <div class="event_1li bg_brown p-4">
             <h3 class="text-white">Get Started Here</h3>
         <p class="text-light mb-0">Success isn’t really that difficult.</p>
          </div>
         <div class="event_1li1 bg-white p-4 pt-5 pb-5">
           <h6 class="mb-2 fw-bold font_14">Full Name</h6>
         <input class="form-control" type="text"/>
         <h6 class="mb-2 mt-3 fw-bold font_14">Email Address</h6>
         <input class="form-control" type="text"/>
          <h6 class="mb-2 mt-3 fw-bold font_14">Your Phone</h6>
         <input class="form-control" type="text"/>
          <h6 class="mb-2 mt-3 fw-bold font_14">Subject</h6>
         <input class="form-control" type="text"/>
     <h6 class="mb-0 mt-4"><a class="button" href="/">Submit Now</a></h6>
         </div>
        </div>
        </div>
       </div>
       <div class="col-md-7">
        <div class="event_1r">
          <div class="row course_1">
        <div class="col-md-9">
         <div class="course_1l">
          <h3 class="text-white">Latest Events</h3>
          <p class="mb-0 text-light">Success isn’t really that difficult. There is a significant portion of the population</p>
         </div>
        </div>
        <div class="col-md-3">
         <div class="course_1r text-end">
           <h6 class="mb-0"><a class="button" href="/">View All</a></h6>
         </div>
        </div>
      </div>
          <div class="event_1ri row bg-white p-3 mx-0 mt-4 rounded-3">
           <div class="col-md-5 p-0">
            <div class="event_1ril">
              <div class="grid clearfix">
                     <figure class="effect-jazz mb-0">
                       <a href="/"><img src={image1} class="w-100" alt="abc"/></a>
                     </figure>
                 </div>
            </div>
           </div>
           <div class="col-md-7">
            <div class="event_1rir">
              <h5>Young leaders in tech policy fellowship</h5>
              <h6 class="font_14 mt-3"><i class="fa fa-calendar col_brown me-1"></i> 3 Nov, 2022
    <i class="fa fa-clock-o col_brown me-1 ms-3"></i> 10:00 AM - 13:00 PM</h6>
        <p class="font_14 mt-3">Franklin’s extraordinary success in life and politics can be attributed to his perseverance.</p>
        <h6 class="mb-0 mt-3"><a class="button_1 pt-2 pb-2 px-3" href="/">Join Event</a></h6>
            </div>
           </div>
          </div>
          <div class="event_1ri row bg-white p-3 mx-0 mt-4 rounded-3">
           <div class="col-md-5 p-0">
            <div class="event_1ril">
              <div class="grid clearfix">
                     <figure class="effect-jazz mb-0">
                       <a href="/"><img src={image2} class="w-100" alt="abc"/></a>
                     </figure>
                 </div>
            </div>
           </div>
           <div class="col-md-7">
            <div class="event_1rir">
              <h5>Protecting our most vulnerable populations</h5>
              <h6 class="font_14 mt-3"><i class="fa fa-calendar col_brown me-1"></i> 7 Nov, 2022
    <i class="fa fa-clock-o col_brown me-1 ms-3"></i> 10:00 AM - 13:00 PM</h6>
        <p class="font_14 mt-3">Next time you really want to achieve something, to focus on your own personal.</p>
        <h6 class="mb-0 mt-3"><a class="button_1 pt-2 pb-2 px-3" href="/">Join Event</a></h6>
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
}

export default Event;

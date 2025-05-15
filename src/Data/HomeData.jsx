import Img1 from '../Assests/Course/1.jpg' 
import Img2 from '../Assests/Course/2.jpg' 
import Img3 from '../Assests/Course/3.jpg' 
import Img4 from '../Assests/Course/4.jpg' 
import Img5 from '../Assests/Course/5.jpg' 
import Img6 from '../Assests/Course/6.jpg' 
import instructor1 from '../Assests/Course/101.jpg'
import instructor2 from '../Assests/Course/102.jpg'
import instructor3 from '../Assests/Course/103.jpg'

import therapist1 from '../Assests/Team/1.jpg';
import therapist2 from '../Assests/Team/2.jpg';

export const slides = [
    {
        image: 'https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
        title: 'Your Mind Matters',
        description: 'Mental health is just as important as physical health. Prioritizing your emotional well-being is a sign of strength, not weakness. Make time for yourself and remember — healing begins with awareness.'
    },
    {
        image: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Therapy Heals',
        description: 'Talking to a therapist or counselor can open doors to clarity, acceptance, and growth. It’s okay to seek support — every conversation is a step toward healing and understanding yourself better.'
    },
    {
        image: 'https://images.unsplash.com/photo-1616376392785-8e7e283571e6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Breathe and Be Present',
        description: 'In a world full of noise, stillness is power. Practices like meditation, mindful breathing, and journaling can help ground you in the present and bring calm amidst chaos. Your peace matters.'
    },
    {
        image: 'https://images.unsplash.com/photo-1556159992-e189f8e50104?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'You’re Not Alone',
        description: 'No matter how heavy your thoughts feel, remember — others have walked similar paths and emerged stronger. Reach out, connect, share. You deserve support, compassion, and hope.'
    },
    {
        image: 'https://images.unsplash.com/photo-1546957221-2321daad2b98?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Awareness is Strength',
        description: 'Breaking the stigma around mental health starts with understanding and empathy. By educating ourselves and speaking openly, we empower others to do the same. Awareness is the first step to collective healing.'
    }
];


export const courseData = [
    {
      image: Img1,
      category: "Self-Help",
      instructorImage: instructor1,
      instructor: "Dr. Priya Sharma",
      title: "Introduction to Mental Wellness",
      rating: 4.8,
    },
    {
      image: Img2,
      category: "Workshops",
      instructorImage: instructor2,
      instructor: "Ankit Verma",
      title: "Live Meditation & Mindfulness Workshop",
      rating: 4.6,
    },
    {
      image: Img3,
      category: "Student Support",
      instructorImage: instructor3,
      instructor: "Prof. Anjali Mehta",
      title: "Coping with Exam Stress",
      rating: 4.7,
    },
    {
      image: Img4,
      category: "Educator Support",
      instructorImage: instructor1,
      instructor: "Dr. Rajeev Menon",
      title: "Mental Health for Educators",
      rating: 4.5,
    },
    {
      image: Img5,
      category: "Workshops",
      instructorImage: instructor2,
      instructor: "Ritika Sen",
      title: "Healing Through Journaling",
      rating: 4.9,
    },
    {
      image: Img6,
      category: "Student Support",
      instructorImage: instructor3,
      instructor: "Dr. Neha Kapoor",
      title: "Managing Social Anxiety",
      rating: 4.6,
    },
  ];

  export const teamMembers = [
    {
      name: "Dr. Aisha Verma",
      role: "Clinical Psychologist",
      description: "Helping individuals navigate anxiety, depression, and trauma with care and evidence-based practices.",
      image: therapist1
    },
    {
      name: "Anjali Mehta",
      role: "Therapist & Life Coach",
      description: "Empowering people to take charge of their mental well-being and personal growth.",
      image: therapist2
    },
  ];
  


  export const testimonials = [
    {
      name: 'Neha Joshi',
      position: 'Counselor',
      message:
        'This organization has been a beacon of hope in my life. Their compassionate approach and dedicated team helped me overcome challenges I never thought I could face. Thanks to their support, I now feel empowered and more resilient than ever before.',
    },
    {
      name: 'Rohit Iyer',
      position: 'Therapist',
      message:
        'The counseling services offered here are truly exceptional. The environment is safe and nurturing, allowing me to explore my feelings without fear or judgment. Their programs gave me the tools I needed to manage anxiety and regain control over my life.',
    },
    {
      name: 'Sonal Patil',
      position: 'Volunteer',
      message:
        'Volunteering with this organization has been one of the most rewarding experiences of my life. Witnessing the positive transformations in individuals and families inspired me daily. Their holistic approach to mental health fosters genuine healing and community support.',
    },
    {
      name: 'Amit Singh',
      position: 'Patient',
      message:
        'Before joining this program, I struggled with constant worry and stress that affected my daily life. The therapies and group sessions provided a lifeline, helping me understand my emotions and develop healthier coping mechanisms. I am grateful for this second chance.',
    },
    {
      name: 'Dr. Radhika Nair',
      position: 'Psychologist',
      message:
        'This organization combines evidence-based practices with heartfelt care, creating a unique space for recovery and growth. As a professional, I admire their dedication to making mental health resources accessible to everyone in need.',
    },
    {
      name: 'Manish Desai',
      position: 'Social Worker',
      message:
        'Providing support to vulnerable populations is challenging, but this organization’s collaborative spirit and innovative programs make a real difference. Their emphasis on community engagement and education helps break down stigma and promotes wellness.',
    },
    {
      name: 'Pooja Malhotra',
      position: 'Patient',
      message:
        'The community I found here gave me strength and a sense of belonging during my darkest moments. The counseling, workshops, and peer support groups were instrumental in my recovery journey. I now approach life with renewed hope and confidence.',
    },
    {
      name: 'Karan Bhatia',
      position: 'Support Staff',
      message:
        'Working here has shown me the incredible resilience of the human spirit. Every day I see people transform their lives through compassion, understanding, and the right guidance. It’s an honor to be part of a team that truly cares about mental wellness.',
    },
  ];
  
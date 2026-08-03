import React from 'react'
import Card from './components/card'


const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$145/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.fxvemKDI0Fu5GAVdeUZvzgHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$100/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.iVYnR_RIJBqDyKHLKofBIwHaF_?r=0&pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$165/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zMUV7B749XG0H15ZaBO_LwHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$150/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://images.hdqwalls.com/download/nvidia-brand-logo-2-2932x2932.jpg",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "GPU Programmer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://pipedream.com/s.v0/app_o7hboQ/logo/orig",
    companyName: "Oracle",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.j56gzk49LS4_fMWubGYKCAHaGu?r=0&pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Product Designer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$110/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logospng.org/download/uber/logo-uber-4096.png",
    companyName: "Uber",
    datePosted: "10 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130/hour",
    location: "Bengaluru, India"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card companyName={elem.companyName} post={elem.post} pay={elem.pay} datePosted={elem.datePosted} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} location={elem.location}/>
      })}
    </div>
  )
}

export default App
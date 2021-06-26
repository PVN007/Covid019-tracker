import React from 'react';
import image from '../image/babul.jpg';
import image2 from '../image/pavan.jpeg';
import image3 from '../image/ankit.jpeg';
import image4 from '../image/salj.jpeg';
import image5 from '../image/sashi.jpeg';
import '../components/Profile.css'


const Profile = () => {
    return (
        <>
        <h4>Devlopers</h4>
       <div className="box">
       <div className="card">
           <img className="babul" src={image} alt="profile"/>
           <div className="text">
               <h3>Name:Babul Kumar</h3>
               <p>Enroll:0103CA191020</p>
               <p>Branch:MCA(4thSem)</p>
           </div>
           </div>
       <div className="card">
           <img src={image2} alt="profile"/>
           <div className="text">
               <h3>Name:Pavan chaurasiar</h3>
               <p>Enroll:0103CA191043</p>
               <p>Branch:MCA(4thSem)</p>
           </div>
           </div>
       <div className="card">
           <img className="sal" src={image3} alt="profile"/>
           <div className="text">
               <h3>Name:Ankit Anand</h3>
               <p>Enroll:0103CA191010</p>
               <p>Branch:MCA(4thSem)</p>
           </div>
           </div>
       <div className="card">
           <img src={image4} alt="profile"/>
           <div className="text">
               <h3>Name:Shailja Tiwari</h3>
               <p>Enroll:0103CA191056</p>
               <p>Branch:MCA(4thSem)</p>
           </div>
           </div>
       <div className="card">
           <img src={image5} alt="profile"/>
           <div className="text">
               <h3>Name:Shashi Kumar sant</h3>
               <p>Enroll:0103CA191057</p>
               <p>Branch:MCA(4thSem)</p>
           </div>
           </div>
       </div>
          
           
        
            
        </>
    )
}

export default Profile

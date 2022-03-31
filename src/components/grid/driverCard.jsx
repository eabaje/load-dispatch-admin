import { Country,State } from 'country-state-city'
import React from 'react'

function driverCard(props) {

    const calculate_age = dob => {
        const birthDate = new Date(dob); 
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
      
        return Math.abs(age.getUTCFullYear() - 1970);
      }
  return (
    <>
   
    <div class="container mt-5">
     <div class="row d-flex justify-content-center">
         <div class="col-md-7">
             <div class="card p-3 py-4">
                 <div class="text-center"> <img src={props.PicUrl} width="100" class="rounded-circle"/> </div>
                 <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">{props.DriverName}</span>
                     <h5 class="mt-2 mb-0">{props.DriverName}</h5> <span>Date of Birth:{props.DOB}</span>
                     
                     
                    
                     <div class="row about-list">
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Birthday</label>
                                        <p>{props.DOB}</p>
                                    </div>
                                    <div class="media">
                                        <label>Age</label>
                                        <p>{calculate_age(props.DOB)} Yr</p>
                                    </div>
                                    <div class="media">
                                        <label>City</label>
                                        <p>{ props.City}</p>
                                    </div>
                                    <div class="media">
                                        <label>Country</label>
                                        <p>{ Country.getCountryByCode(props.Country).name}</p>
                                    </div>
                                </div>
                        </div>
                     <div class="px-4 mt-1">
                         <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                     </div>
                     
                     <ul class="social-list">
                         <li><i class="fa fa-facebook"></i></li>
                         <li><i class="fa fa-dribbble"></i></li>
                         <li><i class="fa fa-instagram"></i></li>
                         <li><i class="fa fa-linkedin"></i></li>
                         <li><i class="fa fa-google"></i></li>
                     </ul>
                     <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> <button class="btn btn-primary px-4 ms-3">Contact</button> </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
    
    
    </>
  )
}

export default driverCard
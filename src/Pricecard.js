

export default function Pricecard(props){
// return <div class="col-lg-3 mt-5">
//     <div class="card">
//     <p class="membership">{props.membership}</p>
//     <h1 class='price'>{props.price}<span class="permonth">/month</span></h1>
   
//     <ul class="fa-ul">
//         <li ><i class="fas fa-check"></i>{props.users}</li>
//         <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.gb} storage</li>
//          <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
//         <li ><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
//         <li >Unlimited Private Projects</li>
//         <li >Dedicated Phone Support</li>
//         <li >Free Subdomain</li>
//         <li>Monthly Status Reports</li>
//     </ul>
//     <button class="button">BUTTON</button>
   
//     </div>
// </div>
 return <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 class="card-price text-center">{props.data.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              
             { props.data.features.map(obj => {
               if(obj.enable){
                 return <li><span class="fa-li"><i class="fas fa-check"></i></span>{obj.name}</li>
               }
               else{ return <li class="text-muted"><span  class="fa-li" ><i class="fas fa-times"></i></span>{obj.name}</li>}
           
             })
              }






              {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.storage} Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.name}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li> */}
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
}
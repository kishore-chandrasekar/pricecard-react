import logo from './logo.svg';
import './App.css';
import Pricecard from "./Pricecard";

function App() {
 let PriceList=[{
   plan:"FREE",
   price:"0$",
   currency:"$",
   period:"month",
   features:[{
     name:"Single User",
     enable: true
   },
   {
    name:"5GB",
    enable: true
 },{
  name:"Unlimited Public Projects",
  enable: true
},
{
  name:"Cummunity Access",
  enable: true
},
{
  name:"Unlimited Private Projects",
  enable: false
},
{
  name:"Dedicated Phone Support",
  enable: false
},
{
  name:"Free Sub-Domain",
  enable: false
},
{
  name:"Monthly Status Reports",
  enable: false
}
 
]
},{
  plan:"PLUS",
  price:"9$",
  currency:"$",
  period:"month",
  features:[{
    name:"5 Users",
    enable: true
  },
  {
   name:"50GB",
   enable: true
},{
 name:"Unlimited Public Projects",
 enable: true
},
{
 name:"Cummunity Access",
 enable: true
},
{
 name:"Unlimited Private Projects",
 enable: true
},
{
 name:"Dedicated Phone Support",
 enable: true
},
{
 name:"Free Sub-Domain",
 enable: true
},
{
 name:"Monthly Status Reports",
 enable: false
}

]
},{
  plan:"PRO",
  price:"49$",
  currency:"$",
  period:"month",
  features:[{
    name:"Multiple Users",
    enable: true
  },
  {
   name:"150GB",
   enable: true
},{
 name:"Unlimited Public Projects",
 enable: true
},
{
 name:"Cummunity Access",
 enable: true
},
{
 name:"Unlimited Private Projects",
 enable: true
},
{
 name:"Dedicated Phone Support",
 enable: true
},
{
 name:"Free Sub-Domain",
 enable: true
},
{
 name:"Monthly Status Reports",
 enable: true
}
 
]
}]
  return (
   
   <section class="pricing py-5">
     <div class="container">
     <div class="row">
      { 
      PriceList.map(obj=> <Pricecard data={obj}></Pricecard>)
      }
     </div>
     </div>

   </section>
  );
}

export default App;

import React, { useState } from 'react'
import NavBar from '../Navbar'

const CME = () => {
    const [range,setrange]=useState(0);
    // const [Unit,setUnit]=useState(); 
    const [amountOfBricks,setAmountofBricks]=useState();
    const [Cement,SetamountOfCement]=useState();
    const [Aggregate,setAmountAggregate]=useState();
    const [tiles,setAmountofTiles]=useState();
    const [Steel,setSteel]=useState();
    let Unit;   
    const displayrange=(e)=>{
setrange(e.target.value);
    }
    const CalculateMaterial=()=>{
setAmountofBricks(range*36);
SetamountOfCement(range*0.4);
setAmountofTiles(range*1.3)
setSteel(range*4);
    }
    // const checkUnitValue=(e)=>{
    //     if(e.target.name==='Marla'){
    //        Unit='Marla'
    //     }
    //   else  {
    //     Unit='Sqft'
    //     console.log('U')
    //      }
    //      console.log(Unit)
    // }
  return (
    <div>
   <div className='ml-[250px] w-[1000px] mt-[50px]'>
    <h2 className='font-bold'>How To Use?</h2>
    <p className='mt-[10px] font-light'>Please specify your desired area in 'Marlas' or 'square feet, and the desired number of floors. You can also specify your budget in Rs, and press the 'Calculate' button. Based on this information we'll tell you the details of the construction cost, and also which category fits your budget.(The green ones shown after calculation will be the ones suitable within your specified budget.)</p>
   </div>
   <div>
    <div className='flex p-[20px] ml-[320px] '>
<div className=' ml-[250px] mt-[10px] '>
    <h1 className='font-bold'>Area Size</h1>
    <div className='flex'>
    <input type="range" id="volume" name="Area"
         min="0" max="50000" value={range} onChange={displayrange}></input>
         <p className='ml-[10px]'>{range}  Sqft</p>
  {/* <label for="volume">Area</label>   */}
        </div>
 
    </div>
    {/* <div className='ml-[200px]'>
        <p className='font-bold'>Area Unit</p>
       <input type="checkbox" id="Unit" name="Marla" value={Unit} onChange={checkUnitValue}>
       
       </input>
       <label>Marlas</label> 
       <input type="checkbox" id="Unit" name="Sq" value={Unit} className='ml-[10px]'>
       </input>
       <label >Sq's Ft</label> 
    </div> */}
   </div>
    </div>
    <button className='btn bg-[#5f99be] border-[#5f99be] text-base-100 btn-sm w-1/2 
                hover:bg-white hover:text-black hover:border-black ml-[300px]'
                 onClick={CalculateMaterial}>
                Calculate
              </button>
              
              <div className="card w-96 bg-primary text-primary-content ml-[450px] mt-[70px]">
  <div className="card-body">
    <h2 className="card-title">Material Required</h2>
    <p >No Of Bricks ={amountOfBricks}Pcs.</p>
    <p >Cement Bags ={Cement}Bags.</p>
    {/* <p >Amount Of Aggregate ={Aggregate}per/cbft</p> */}
    <p>Amount of Tiles={tiles}persqft</p>
    <p >Amount Of Steel ={Steel}Kg.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    </div>
  )
}

export default CME

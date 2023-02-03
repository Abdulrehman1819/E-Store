import  {useProductContext}  from '../context/Productcontext';
import Product from './Product'
const FeaturedProducts = () => {
    const {isLoading,featureProducts}=useProductContext();
   
 

 if(isLoading){
    return<div>...Loading</div>;
 }
 return(
//    console.log(featureProducts)
<>
<div className='font-semibold text-xl  flex flex-col  bg-base-200 w-100% font-serif'>
    <div className='ml-[300px]'>
    Check Now!
    </div >
<div className='ml-[300px]'>
Our FeaturedProducts
</div>
   
</div>
<div className='flex bg-base-200 justify-center '>
{featureProducts.map(((elem)=>{
    return <Product key={elem.id} image={elem.imageUrl} {...elem}></Product>
}))}
</div>
</>
 )
  
  
};

export default FeaturedProducts

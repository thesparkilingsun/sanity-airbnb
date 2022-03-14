import {createDataHook} from 'next-data-hooks'
import { node } from 'prop-types'
import sanityClient from '../sanityClient/sanityClient'



const useDude = createDataHook('DudeA', async()=>{
   
   const data = await sanityClient.getAll('property');
  const filter =  data.filter((dt)=>{
       if(dt.id === 1)
            return dt;
   })
   
    return filter;
})

export default function DisplayProperty(){
    const vals = useDude(); 
    return(
        <div>
            <h2>Result</h2>
            <h3></h3>
            <h4></h4>
            <h5>Block</h5>
            <h6></h6>
        </div>
    )
}

DisplayProperty.dataHooks = [useDude];

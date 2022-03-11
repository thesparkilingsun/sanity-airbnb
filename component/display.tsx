import {createDataHook} from 'next-data-hooks'
import sanityClient from '../sanityClient/sanityClient'



const useDude = createDataHook('TowThrones', async()=>{
    const data = await sanityClient.get('property','b65fb310-b3b6-44cb-b707-ec741248d633');
    const values = data.host?.splice(0,1);
    const host = values?.pop();
    const query = `*[_type==host && key== "${host?._key}"]`
    const res = await sanityClient.query(query);
    console.log(res)
    return data;
})

export default function Disco(){
    const {beds,bedrooms,bedTypes,pricePerNight,host,review} = useDude(); 
   
    return(
        <div>
            
            <h2>Result</h2>
            <h3>{beds}</h3>
            <h4>{bedrooms}</h4>
            <h5></h5>
            <h6>{pricePerNight}</h6>
           
            
        </div>
    )
}

Disco.dataHooks = [useDude];

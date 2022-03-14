import { createDataHook} from 'next-data-hooks'
import sanityClient from '../sanityClient/sanityClient'
import DisplayProperty from './property1';

const useProperty2Data = createDataHook('DudeB', async()=>{
    //const qry = `*[_type == 'property' ]{ propertyTitle,location,propertyType,pricePerNight,beds,bedrooms,description,'beds':bedTypes.beds}`
    const res = await sanityClient.getAll('property');
    const filter = res.filter((dt)=>{
        if(dt.id === 2){
            return dt;
        }
    })
   
    return res;
})

export default function Property2(){
    const property2Data = useProperty2Data();
    return(<span>Hello Property2</span>)
}

Property2.dataHooks = [
    useProperty2Data,
    ...DisplayProperty.dataHooks
]
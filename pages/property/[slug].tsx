import { GetServerSidePropsContext } from "next";
import sanityClient from "../../sanityClient/sanityClient";
import styled from 'styled-components';
import { isMultiple } from "../../utils/isMultiple";
import { type } from "os";
import Maps from "../../component/maps";

const ImageContainer = styled.div.attrs(props =>({
    type:"text",
    url: props.url || "#fff"
}))`
    border: 1px solid black;
    background-image: url(${ props => (props.url !='' ? props.url :'#fff')});
    height: 100vw;
    z-index: -1;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;

`

export default function Property(props:Props){
    if(props === undefined){
        return (<h1>Props does not exist</h1>)
    }
    
        const property = {...props?.property}
        const owner = {...props?.owner}; 
        const source:string = props?.ownerImageUrl ?? '';

        const{propertyTitle,bedrooms,beds,propertyType,pricePerNight,description,location} = property
        const{name} = owner;
       
        
    return(
        <div>
            <ImageContainer url={source} ></ImageContainer>
            <h1><b>{propertyTitle}</b></h1>
            <h2>{propertyType}</h2>
            <h3>bedroom{isMultiple(bedrooms )} {bedrooms} * {beds} bed{isMultiple(beds)}</h3>
            <h4>Price per Night{pricePerNight}</h4>
            <h4>Description: {description}</h4>
             <Maps props={location}/>

        </div>
    )
}

export async function getServerSideProps(pageContext:GetServerSidePropsContext) {
    const pageSlug = pageContext.query.slug;
    const res = await sanityClient.get('property',`b65fb310-b3b6-44cb-b707-ec741248d633`);
    const host = await sanityClient.get('person','087e4693-d838-4db2-9227-c28194e3eaaf');
    const hostImage:any = await sanityClient.get('person','image-b67aeafb5215a58678e7c16844b544903724ed76-4608x2963-jpg')
    const src:string = hostImage.url;
    console.log("FILTER HostImage",hostImage.url)
    
    if(!res)
    {
        return {
            props:null,
            notFound:true
        }
    }
    else
    return {
        props:{
            property: {...res},
            owner: {...host},
            ownerImageUrl: src,
        }
    }
} 

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getServerSideProps>>['props'];

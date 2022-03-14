import { GetServerSidePropsContext } from "next";
import sanityClient from "../../sanityClient/sanityClient";
import styled from 'styled-components';

const ImageContainer = styled.div`
    border: 1px solid black;
    background-image: url(${prop => prop.url ?? '#fff'});
    height: 100vw;
    z-index: -1;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;

`

export default function Property({owner,ownerImageUrl,property}:Props){
    console.log(property)
    
    const source:string = ownerImageUrl;
    return(
        <div>
            <ImageContainer url={ownerImageUrl}>
            <h1>{owner}</h1>
                Hello
            <h2>{property.title}</h2>
            </ImageContainer>
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
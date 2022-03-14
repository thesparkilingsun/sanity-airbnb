import type { GetStaticPropsContext, NextPage } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import DisplayProperty from '../component/property1';
import Property2 from '../component/property2';


const Home: NextPage = (props) => {
    
    return (<div><DisplayProperty/> <Property2 /></div>);
    
};



export async function getStaticProps(context : GetStaticPropsContext) {
    const dataHooksProps = await getDataHooksProps({
        context,
        dataHooks : Property2.dataHooks
        
    })

    return{
        props:{...dataHooksProps}
    }
}

export default Home;




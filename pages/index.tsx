import type { GetStaticPropsContext, NextPage } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import Disco from '../component/display';


const Home: NextPage = (props) => {
    
    return (<Disco/>);
    
};



export async function getStaticProps(context : GetStaticPropsContext) {
    const dataHooksProps = await getDataHooksProps({
        context,
        dataHooks : Disco.dataHooks
    })

    return{
        props:{...dataHooksProps}
    }
}

export default Home;

//Static Props can only be accessed in pages Directly
// It cannot be aacees


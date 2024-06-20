import react from 'react';
import CarCategory from '../components/CarCategory/page';
import Layout from '../components/layout/page';

const categories: React.FC = () =>{
    return(
        <Layout>
            <CarCategory/>
        </Layout>
    )
}
export default categories;
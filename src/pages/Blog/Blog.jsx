import PageTitle from '../../components/PageTitle';
import './Blog.css';

function Blog() {
    return (
        <>
            <div className='blog-container'>
                <PageTitle pageTitle="Alex's Blog" />
                <span id='marker'></span>
            </div>
        </>
    )
};

export default Blog;

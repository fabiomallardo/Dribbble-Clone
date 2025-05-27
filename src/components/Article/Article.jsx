import './Article.css';
import ArticlePlus from './Article+.jsx';
import Article2 from './Article2.jsx';
import Sidebar2 from './Sidebar2.jsx';

function Article() {
    return (
        <div className="container-article">

            <div className="container-title">
                <div className="title-article">
                    <span className='span-article'><strong>More by dpopstudio</strong></span>
                </div>
                <div className="profile-article">
                    <p className='p-article'> View Profile </p>
                </div>
            </div>

          <ArticlePlus />
          <Article2 />
          <Sidebar2 />

        </div>

    )
}

export default Article;
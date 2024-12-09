import '../Itens/Post_it.css'

import PostItBranco from '../Itens/Post_it_branco.png'

function Post_it_branco(){
    return(
        <div className="post-it-branco">
            <img src={PostItBranco} id='post-branco' alt="Post" />
        </div>
    )
    
}

export default Post_it_branco
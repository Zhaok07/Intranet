import '../Itens/Post_it.css'

import PostItAmarelo from '../Itens/Post_it_amarelo.png'

function Post_it_Amarelo(){
    return(
        <div className="post-it-amarelo">
            <img src={PostItAmarelo} id='post-amarelo' alt="Post" />
        </div>
    )
    
}

export default Post_it_Amarelo
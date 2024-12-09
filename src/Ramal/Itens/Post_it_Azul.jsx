import '../Itens/Post_it.css'

import PostItAzul from '../Itens/Post_it_azul.png'

function Post_it_Azul(){
    return(
        <div className="post-it-branco">
            <img src={PostItAzul} id='post-azul' alt="Post" />
        </div>
    )
    
}

export default Post_it_Azul
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFlip, EffectCube, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper
import './SwiperDois.css'; // Importa seus estilos personalizados


function SwiperDois() {
    const data = [
        { id: '1', image: 'https://github.com/Zhaok07/imagens/blob/main/001_MAIO%20AMARELO.jpeg?raw=true'},
        { id: '2', image: 'https://github.com/Zhaok07/imagens/blob/main/001_MAIO_ENFERMAGEM.jpeg?raw=true'},
        { id: '3', image: 'https://github.com/Zhaok07/imagens/blob/main/001_MAIO_ENFERMAGEM_V5.jpeg?raw=true'},
        { id: '4', image: 'https://github.com/Zhaok07/imagens/blob/main/001_MAIO_ENFERMAGEM_V6.jpeg?raw=true'},
        { id: '5', image: 'https://github.com/Zhaok07/imagens/blob/main/001_ABRIL%20VERDE%20E%20AZUL.jpeg?raw=true'},
        { id: '6', image: 'https://github.com/Zhaok07/imagens/blob/main/001_ABRIL_TRABALHADOR.jpeg?raw=true'},
        { id: '7', image: 'https://github.com/Zhaok07/imagens/blob/main/001_ABRIL_VERDE.jpeg?raw=true'},
        { id: '8', image: 'https://github.com/Zhaok07/imagens/blob/main/001_AGOSTO.jpeg?raw=true'},
        { id: '9', image: 'https://github.com/Zhaok07/imagens/blob/main/001_AGOSTO_24.jpeg?raw=true'},
        { id: '10', image: 'https://github.com/Zhaok07/imagens/blob/main/001_JANEIRO_24.jpeg?raw=true'},
        { id: '11', image: 'https://github.com/Zhaok07/imagens/blob/main/001_JULHO_V1.jpeg?raw=true'},
        { id: '12', image: 'https://github.com/Zhaok07/imagens/blob/main/001_JUNHO.jpeg?raw=true'},
    ];

    const delay = 2000; // Delay para o autoplay

    return (
        <div className="container-dois">
            <Swiper
            effect=''
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow, EffectFlip]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={false}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                speed={3000}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide-container">
                        <img src={item.image} alt={`Slide ${item.id}`} className="slide-item-dois" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperDois;
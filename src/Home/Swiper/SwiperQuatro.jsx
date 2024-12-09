import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFlip, EffectCube, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper
import './SwiperQuatro.css'; // Importa seus estilos personalizados



function SwiperQuatro() {
    const data = [
        { id: '1', image: 'https://github.com/Zhaok07/imagens/blob/main/NOSSA%20MISS%C3%83O.png?raw=true' },
        { id: '2', image: 'https://github.com/Zhaok07/imagens/blob/main/NOSSA%20VIS%C3%83O.png?raw=true' },
        { id: '3', image: 'https://github.com/Zhaok07/imagens/blob/main/NOSSOS%20VALORES%20(1).png?raw=true' },
    ];

    const delay = 15000; // Delay para o autoplay

    return (
        <div className="container-quatro">
            <Swiper
            effect=''
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow, EffectFlip]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                speed={3000}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide-container">
                        <img src={item.image} alt={`Slide ${item.id}`} className="slide-item-quatro" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperQuatro;
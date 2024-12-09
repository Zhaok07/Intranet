import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFlip, EffectCube, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper
import './SwiperUm.css'; // Importa seus estilos personalizados



function SwiperUm() {
    const data = [
        { id: '1', image: 'https://github.com/Zhaok07/imagens/blob/main/2.jpg?raw=true' },
        { id: '2', image: 'https://github.com/Zhaok07/imagens/blob/main/3.jpg?raw=true' },
        { id: '3', image: 'https://github.com/Zhaok07/imagens/blob/main/5.jpg?raw=true' },
        { id: '4', image: 'https://github.com/Zhaok07/imagens/blob/main/6.jpg?raw=true' },
    ];

    const delay = 2000; // Delay para o autoplay

    return (
        <div className="container-um">
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
                        <img src={item.image} alt={`Slide ${item.id}`} className="slide-item-um" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperUm;
import { useQuery } from '@tanstack/react-query';
import Banner from '../components/Banner';
import BtnWhite from '../components/Buttons/BtnWhite';
import axios from 'axios';
import LoaderBig from '../components/LoaderBig';

interface IGallary{
  id: number;
  title: string;
  image: string;
}

const fetchGallery = async () => {
  const { data } = await axios.get('https://api.ndiigbogermany.org/api/get/galleries');
  return data.data;
};

function Gallery() {
  const { data, error, isLoading } = useQuery(['gallery'], fetchGallery);
 

  if (isLoading) return <LoaderBig/>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      <Banner page="Gallery" img="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226095/Ndi-Igbo%20Germany/gallery/gallery-banner_vh9fdf.png" />
      <section>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full my-10">
          
         
          {data.map((item:IGallary) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className="object-cover object-center h-56 rounded-[10px] w-full"
            />
          ))}
        </div>
      </section>
      <section className="bg-colorPrimary flex flex-col justify-center items-center text-center text-white">
        <p className="text-2xl font-medium">
          Membership is open to All official registered Igbo Unions/Associations in Germany.
        </p>
        <BtnWhite />
      </section>
    </>
  );
}

export default Gallery;

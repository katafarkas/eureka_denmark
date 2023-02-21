import Image from "next/image";

const Products = ({ data }) => {
  console.log(data);
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto text-center flex">
        <div>
          <h3 className="text-5xl font-bold font-alexbrush mb-4">
            {data.title}
          </h3>
          <p>{data.text}</p>
        </div>
        <div>
          <Image alt="img" src={data.image.src} height={250} width={300} />
        </div>
      </div>
    </section>
  );
};

export default Products;

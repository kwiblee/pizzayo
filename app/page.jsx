import Header from "@/components/shared/blocks/Header";
import Container from "@/components/shared/parts/Container";
import Categories from "@/components/shared/blocks/Categories";
import SortPopup from "@/components/shared/parts/SortPopup";
import Filters from "@/components/shared/blocks/Filters";
import Products from "@/components/shared/blocks/Products";

export default async function Page() {
  return (
    <main>
      <Header/>


      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 mt-4">
        <Container className='h-[40px]'>
          <div className="w-full h-full flex justify-between items-center">
            <Categories />
            <SortPopup />
          </div>
        </Container>
      </div>

      <Container className='flex mt-12'>
        <div className="w-1/4 h-[300px]">
          <Filters />
        </div>
        <div className="w-full">
          <div className="w-[95%] float-right">
            <Products />
          </div>
        </div>
      </Container>
    </main>
  );
}


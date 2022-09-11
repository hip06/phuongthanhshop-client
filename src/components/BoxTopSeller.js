import { ProductCardCtHeight } from "./ProductCard";


const BoxTopSeller = ({ color }) => {
    return (
        <div className="bg-[#d9d9d9] mb-[5px] p-[10px] rounded">
            <div className="mb-[3px]">
                <span className="font-bold text-[15px]">#Top </span>
                <span style={{ color: color }} className="font-bold text-[15px]">
                    bán chạy
                </span>
            </div>

            <div className="overflow-x-auto flex ">
                {/* {products?.map((product, i) => (
            <div className="[&:not(:last-child)]:mr-5">
              <ProductCardCtHeight
                id={product.id}
                image={product.mainImage}
                name={product.name}
                costPerUnit={product.costPerUnit}
                color={site.color}
              ></ProductCardCtHeight>
            </div>
          ))} */}
            </div>


            <div>
                <div className="mt-[20px] mb-[5px]">
                    <span
                        style={{ color: color }}
                        className="font-bold text-[15px]"
                    >
                        #Mới nhất
                    </span>
                </div>

                <div className="overflow-x-auto flex ">
                    {/* {products.map((product, i) => (
                <div className="[&:not(:last-child)]:mr-5">
                  <ProductCardCtHeight
                    id={product.id}
                    image={product.mainImage}
                    name={product.name}
                    costPerUnit={product.costPerUnit}
                    color={site.color}
                  ></ProductCardCtHeight>
                </div>
              ))} */}
                </div>
            </div>
        </div>
    )
}

export default BoxTopSeller;
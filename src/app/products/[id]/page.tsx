import { getProductById, getSimilarProducts } from "@/lib/actions";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { formatNumber } from "@/lib/utils";
import PriceCard from "@/components/PriceCard";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

type Props = {
  params: { id: string };
};

const productDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);

  const similarProducts = await getSimilarProducts(id);


  if (!product) redirect("/");

  return (
    <>
      <div className="flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24">
        <div className="flex gap-28 xl:flex-row flex-col">
          <Image
            src={product.image}
            alt={product.title}
            width={550}
            height={400}
            className="rounded-[17px] border border-[#cddbff] object-contain flex-1 min-w-[40%] mx-10"
          />
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-[28px] text-gray-900 font-semibold">
                  {product.title}
                </p>
                <Link
                  href={product.url}
                  target="_blank"
                  className="text-base text-black opacity-50"
                >
                  Visit Product
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#fff0f0] rounded-10">
                  <Image
                    src="/assets/icons/red-heart.svg"
                    alt="heart"
                    height={20}
                    width={20}
                  />
                  <p className="text-base font-semibold text-[#d46f77]">
                    {product.reviewsCount}
                  </p>
                </div>
                <div className="p-2 bg-white-200 rounded-10">
                  <Image
                    src="/assets/icons/bookmark.svg"
                    alt="bookmark"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="p-2 bg-white rounded-10">
                  <Image
                    src="/assets/icons/share.svg"
                    alt="share"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#e4e4e4]">
              <div className="flex flex-col gap-2">
                <p className="text-[34px] text-gray-900 font-bold">
                  {product.currency}
                  {formatNumber(product.currentPrice)}
                </p>
                <p className="text-[21px] text-gray-900 font-bold opacity-50 line-through">
                  {product.currency}
                  {formatNumber(product.originalPrice)}
                </p>
                <p className="text-red-600 text-bold text-base">
                  - {product.discountRate} %
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex items-center gap-3 px-3 py-2 bg-[#fbf3ea] rounded-[27px]">
                    <Image
                      src="/assets/icons/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <p className="text-sm font-semibold text-orange-500">
                      {product.stars || 25}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-[27px]">
                    <Image
                      src="/assets/icons/comment.svg"
                      alt="comment"
                      width={16}
                      height={16}
                    />
                    <p className="text-sm text-slate-900 font-semibold">
                      {product.reviewsCount} reviews
                    </p>
                  </div>
                </div>
                <p className="text-sm text-black opacity-50">
                  <span className="text-green-400 font-semibold">93%</span>
                  of buyers have recommended this product.
                </p>
              </div>
            </div>
            <div className="my-7 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap">
                <PriceCard
                  title="Current Price"
                  iconSrc="/assets/icons/price-tag.svg"
                  value={`${product.currency} ${formatNumber(
                    product.currentPrice
                  )}`}
                />
                <PriceCard
                  title="In Stock"
                  iconSrc="/assets/icons/chart.svg"
                  value={`${product.isOutOfStock ? "No" : "Yes"}`}
                />
                <PriceCard
                  title="Highest Price"
                  iconSrc="/assets/icons/arrow-up.svg"
                  value={`${product.currency} ${formatNumber(
                    product.highestPrice
                  )}`}
                />
                <PriceCard
                  title="Lowest Price"
                  iconSrc="/assets/icons/arrow-down.svg"
                  value={`${product.currency} ${formatNumber(
                    product.lowestPrice
                  )}`}
                />
              </div>
            </div>
            <Modal productId={id} />
          </div>
        </div>
        <button className="py-4 px-4 bg-slate-900 hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
          <Image src="/assets/icons/bag.svg" alt="bag" width={22} height={22} />
          <Link href="/" className="text-base text-white">
            Buy Now
          </Link>
        </button>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-slate-900 font-semibold">
              Product Description
            </h3>

            <div className="flex flex-col gap-4">
              {product?.description?.split("\n")}
            </div>
          </div>
        </div>
        <div>
          {similarProducts && (
            <div className="py-14 flex flex-col gap-2 w-full">
              <p className="text-slate-900 text-[32px] font-semibold">
                Similar Products
              </p>

              <div className="flex flex-wrap gap-10 mt-7 w-full">
                {similarProducts.map((product) => (
                  <Card key={product._id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default productDetails;

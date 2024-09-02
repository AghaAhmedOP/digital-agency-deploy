import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

const BlogCard = ({ image, title, preview, link }) => {
  return (
    <div className="mb-10 w-full px-4 lg:w-1/2 xl:w-1/3">
      <Card className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-blog">
        <Link href={link} className="relative block aspect-video">
          <img
            src={image}
            alt={`${title} Image`}
            className="w-full duration-300 group-hover:scale-110 h-full absolute top-0 bottom-0 left-0 right-0"
          />
        </Link>

        <CardContent className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">
          <div>
            <h3 className="mb-3 line-clamp-2">
              <Link
                href={link}
                className="block text-xl font-semibold text-black duration-200 hover:text-primary"
              >
                {title}
              </Link>
            </h3>
            <p className="mb-4 line-clamp-3 text-base font-medium text-para">
              {preview}
            </p>
          </div>
          <div>
            <Link
              href={link}
              className="text-sm font-medium text-black underline duration-200 hover:text-primary hover:no-underline"
            >
              Read More
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;

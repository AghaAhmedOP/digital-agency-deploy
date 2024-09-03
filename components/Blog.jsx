import SectionHeader from "./SectionHeader";
import { BLOGS } from "@/constants";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-20 lg:pt-[120px]" id="blogs">
      <div>
        <SectionHeader
          subHeading={"blog"}
          heading={"Latest Blogs"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-base !font-medium"}
        />
      </div>

      <div className="-mx-4 flex flex-wrap mt-20">
        {BLOGS.map(({ image, title, preview, link }) => (
          <BlogCard
            key={title}
            image={image}
            title={title}
            preview={preview}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

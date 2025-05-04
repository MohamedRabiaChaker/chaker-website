import { v4 as uuidv4 } from "uuid";

const BlogElementCard = ({ img, title, shortDescription, tags, isNew }) => {
  return (
    <div className="card bg-zinc-400 w-96 shadow-sm">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-200">
          {title}
          {isNew ? <div className="badge badge-secondary">NEW</div> : ""}
        </h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          {tags.map((element) => (
            <div key={uuidv4()} className="badge badge-outline text-gray-200">
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogElementCard;

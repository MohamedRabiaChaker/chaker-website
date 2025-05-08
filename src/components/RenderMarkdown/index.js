import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RenderMarkdown = ({ children }) => {
  return (
    <div className="prose text-black prose-headings:text-black max-w-none">
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </div>
  );
};

export default RenderMarkdown;

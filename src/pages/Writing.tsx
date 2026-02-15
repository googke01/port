import { useParams, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { writingData } from "@/data/mock";
import BottomNav from "@/components/BottomNav";

const WritingList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '50px' }} id="main-content">
        <h2 className="text-text-muted text-[15px] mb-4 font-normal">
          my process
        </h2>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card overflow-hidden">
          {writingData.map((post, index) => (
            <div
              key={post.id}
              onClick={() => navigate(`/process/${post.slug}`)}
              className={`flex items-center justify-between px-5 py-[14px] cursor-pointer hover:bg-surface-hover transition-colors duration-200 ${
                index !== writingData.length - 1
                  ? "border-b border-secondary"
                  : ""
              }`}
            >
              <div className="flex-1 min-w-0 mr-3">
                <p className="text-[15px] text-foreground font-medium leading-snug">
                  {post.title}
                </p>
                <p className="text-[12px] text-text-muted mt-0.5">
                  {post.date}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="text-text-secondary flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

const WritingPost = ({ slug }: { slug: string }) => {
  const navigate = useNavigate();
  const post = writingData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pb-20">
        <p className="text-text-tertiary">Post not found.</p>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pb-28">
      <main className="w-full max-w-[380px] animate-fadeIn" style={{ marginTop: '50px' }} id="main-content">
        <button
          onClick={() => navigate("/process")}
          className="flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-foreground mb-6 transition-colors duration-200 self-start"
        >
          <ArrowLeft size={14} />
          back
        </button>

        <h1 className="text-[20px] font-semibold text-foreground mb-2 leading-tight">
          {post.title}
        </h1>
        <p className="text-[13px] text-text-muted mb-8">{post.date}</p>

        <div className="bg-surface/90 backdrop-blur-sm rounded-card border border-border-subtle/40 shadow-card p-6">
          {post.content.split("\n").map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-[14px] text-text-tertiary leading-[1.75] ${
                idx !== post.content.split("\n").length - 1 ? "mb-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

const Writing = () => {
  const { slug } = useParams();

  if (slug) {
    return <WritingPost slug={slug} />;
  }

  return <WritingList />;
};

export default Writing;

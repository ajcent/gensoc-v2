import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type TestimonialCardProps = Record<
  "quote" | "author" | "occupation" | "imageLink",
  string
>;

const TestimonialCard = (props: TestimonialCardProps) => {
  const { quote, author, occupation, imageLink } = props;

  return (
    <article className="flex-1 flex bg-charcoal-95 p-4 rounded shadow-xl">
      <div className="flex flex-col gap-2 w-full justify-between h-full">
        <blockquote>
          <p className="leading-loose">{quote}</p>
        </blockquote>

        <footer className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={imageLink} alt={author} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <strong className="text-lg font-semibold">{author}</strong>
            <span className="block text-charcoal-30">{occupation}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TestimonialCard;

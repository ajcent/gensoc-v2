import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type TestimonialCardProps = Record<
  "quote" | "author" | "occupation" | "imageLink",
  string
>;

const TestimonialCard = (props: TestimonialCardProps) => {
  const { quote, author, occupation, imageLink } = props;

  return (
    <article className="p-4 shadow-xl">
      <div className="flex flex-col gap-4 w-full justify-between h-full">
        <blockquote>
          <p className="text-charcoal-secondary leading-loose">{quote}</p>
        </blockquote>

        <footer className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={imageLink} alt={author} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <strong className="font-semibold">{author}</strong>
            <span className="block text-charcoal-secondary text-sm">
              {occupation}
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default TestimonialCard;

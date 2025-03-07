interface OverlayTextProps {
  textComponent: React.ReactNode | string;
  bgComponent: React.ReactNode;
}

const OverlayText = ({ textComponent, bgComponent }: OverlayTextProps) => {
  return (
    <figure className="relative h-full">
      {bgComponent}
      <figcaption
        className="
          absolute inset-0 z-[2] 
          grid place-items-center 
          bg-black/70 
          text-white text-center text-[clamp(1rem,2vw+0.5rem,2rem)] font-semibold leading-relaxed 
          p-8 sm:p-16 lg:p-40
        "
      >
        {textComponent}
      </figcaption>
    </figure>
  );
};

export default OverlayText;

interface OverlayTextProps {
  textComponent: React.ReactNode;
  bgComponent: React.ReactNode;
}

const OverlayText = (props: OverlayTextProps) => {
  const { textComponent, bgComponent } = props;

  return (
    <figure className="h-full relative">
      {bgComponent}
      <figcaption className="absolute z-[2] inset-0 bg-black/70 grid place-items-center">
        {textComponent}
      </figcaption>
    </figure>
  );
};

export default OverlayText;

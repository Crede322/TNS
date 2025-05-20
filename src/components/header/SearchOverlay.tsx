interface SearchOverlayProps {
  isVisible: boolean;
}

export default function SearchOverlay({ isVisible }: SearchOverlayProps) {
  return (
    <div
      className={`z-4 bg-black opacity-10 inset-0 fixed ${
        isVisible ? "block" : "hidden"
      }`}
    >
      123
    </div>
  );
}

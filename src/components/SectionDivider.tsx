const SectionDivider = () => {
  return (
    <div className="container" aria-hidden="true">
      <div className="flex items-center justify-center gap-1.5 py-2">
        <div className="h-1 w-6 bg-primary" />
        <div className="h-1 w-4 bg-teal" />
        <div className="h-1 w-2 bg-plum" />
        <div className="h-1 w-1 bg-amber" />
      </div>
    </div>
  );
};

export default SectionDivider;

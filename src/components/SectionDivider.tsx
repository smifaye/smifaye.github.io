const SectionDivider = () => {
  return (
    <div className="container" aria-hidden="true">
      <div className="flex items-center justify-center gap-1.5 py-2">
        <div className="h-1 w-6 bg-primary rounded-full" />
        <div className="h-1 w-4 bg-teal rounded-full" />
        <div className="h-1 w-2 bg-plum rounded-full" />
        <div className="h-1 w-1 bg-amber rounded-full" />
      </div>
    </div>
  );
};

export default SectionDivider;

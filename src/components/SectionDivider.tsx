const SectionDivider = () => {
  return (
    <div className="container" aria-hidden="true">
      <div className="flex items-center gap-3">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/30 via-teal/20 to-transparent" />
        <div className="flex gap-1.5">
          <div className="h-1 w-6 bg-primary rounded-full" />
          <div className="h-1 w-4 bg-teal rounded-full" />
          <div className="h-1 w-2 bg-plum rounded-full" />
          <div className="h-1 w-1 bg-amber rounded-full" />
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-primary/30 via-teal/20 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="border-b border-border/60 bg-accent/30">
    <div className="section-shell py-14 md:py-20">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className={`max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl ${eyebrow ? 'mt-4' : ''}`}>
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  </section>
);

export default PageHero;

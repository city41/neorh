function AboutPage() {
  return (
    <div className="mt-8 mb-16">
      <h1 className="font-bold text-2xl mb-4">About</h1>
      <div className="flex flex-col gap-y-2">
        <p>
          Hi, I&apos;m Matt, I've created a few Neo Geo ROM hacks. I noticed
          distributing Neo Geo hacks is a pain because a Neo Geo game is a zip
          file with many ROM files inside it.
        </p>
        <p>
          I've also noticed Neo Geo ROM hacks are hard to find. They&apos;re
          spread out all over forums, file upload sites, YouTube, etc.
        </p>
        <p>
          This website is my attempt to fix these problems. Here you can build
          Neo Geo hacks with just a couple simple clicks. You can also see a
          collection of hacks, and try out new ones that interest you.
        </p>
      </div>
    </div>
  );
}

export { AboutPage };

import Image from 'next/image';
import classes from '@/src/pages/Home/components/Hero/scss/Hero.module.scss';
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/img_avatar.jpg"
          alt="img_avatar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Yuriy</h1>
      <p>I&apos;m just learning NextJS and this is my first blog project</p>
    </section>
  );
}

export default Hero;

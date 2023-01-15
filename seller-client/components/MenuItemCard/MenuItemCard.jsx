import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './MenuItemCard.module.css';

const MenuItemCard = ({ path, name, icon }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div className={router.asPath == path ? style.containerActive : style.container}>
        <Image
          src={icon}
          width={24}
          height={24}
          className={router.asPath === path && style.logo}
          alt='icon'
          attribute={false}
        />
        <span className={router.asPath === path ? style.nameActive : style.name} attribute={false}>
          {name}
        </span>
      </div>
    </Link>
  );
};

export default MenuItemCard;

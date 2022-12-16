import Image from 'next/image';
import MenuItemCard from '../MenuItemCard/MenuItemCard';
import { SidebarData } from './Sidebar.data';
import style from './Sidebar.module.css';

const Sidebar = ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Image src='/assets/img/logo.png' width={50} height={50} />
          <h3 className={style.heading}>Ecom</h3>
        </div>

        <div className={style.listContainer}>
          {SidebarData.map((el) => (
            <MenuItemCard key={el.name} {...el} />
          ))}
        </div>
      </div>
      <div className={style.contentContainer}>{children}</div>
    </div>
  );
};

export default Sidebar;

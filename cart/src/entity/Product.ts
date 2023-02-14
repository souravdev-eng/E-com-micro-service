import { Column, BaseEntity } from 'typeorm';

export class Product extends BaseEntity {
  @Column({ unique: true })
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  sellerId: string;
}

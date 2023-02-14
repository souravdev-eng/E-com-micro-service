import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('cart')
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  productId: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  userId: string;
}

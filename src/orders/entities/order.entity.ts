import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { uuid as UUIDV4} from 'uuidv4';

export enum OrderStatus{
  Pending = 'pending',
  Approved = 'approved'
}

@Table({
  tableName: 'orders',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

export class Order extends Model{

  @PrimaryKey
  @Column({type: DataType.UUIDV4, defaultValue: DataType.UUIDV4})
  id: string; //uuid

  @Column({ allowNull: false, type: DataType.DECIMAL(precision: 10, scale:2) })
  amount: number;

  @Column({ allowNull: false })
  credit_card_number: string;

  @Column({ allowNull: false })
  credit_card_name: string;

  @Column({ allowNull: false, defaultValue: Order })
  status: OrderStatus;

}

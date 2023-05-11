/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
  BeforeCreate,
  BeforeUpdate,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import { hash, compare } from "bcryptjs";

@Table({
  tableName: "UserCustomer",
  timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
})
class UserCustomer extends Model<UserCustomer> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.NUMBER)
  adminId: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  crm: string;

  @Column(DataType.STRING(2))
  uf: string;

  @Column(DataType.STRING)
  usuario: string;

  @Column(DataType.VIRTUAL)
  password: string;

  @Column(DataType.STRING)
  passwordHash: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BeforeUpdate
  @BeforeCreate
  static hashPassword = async (customer: UserCustomer): Promise<void> => {
    if (customer.password) {
      customer.passwordHash = await hash(customer.password, 8);
    }
    console.log(customer.passwordHash);
  };

  public checkPassword = async (password: string): Promise<boolean> => {
    const teste = await hash(password, 8);
    console.log("newHash", teste);
    console.log("databaseHash", this.getDataValue("passwordHash"));
    console.log("teste", teste == this.getDataValue("passwordHash"));
    return compare(password, this.getDataValue("passwordHash"));
  };
}

export default UserCustomer;

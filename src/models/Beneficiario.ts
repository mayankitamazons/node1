/* eslint-disable camelcase */
import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Procedimento from "./Procedimento";

@Table({
  tableName: "Beneficiarios",
  timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
})
class Beneficiario extends Model<Beneficiario> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  nome: string;

  @Column(DataType.STRING)
  carterinha: string;

  @Column(DataType.STRING)
  plano: string;

  @Column(DataType.STRING)
  anterior_lei_9656_58: string;

  @Column(DataType.STRING)
  sexo: string;

  @Column(DataType.STRING)
  data_nascimento: string;

  @Column(DataType.STRING)
  localidade: string;

  @Column(DataType.STRING)
  uf: string;

  @ForeignKey(() => Procedimento)
  @Column
  procedimentoId: number;

  @BelongsTo(() => Procedimento)
  procedimento: Procedimento;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Beneficiario;

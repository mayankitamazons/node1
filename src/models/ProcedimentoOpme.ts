/* eslint-disable */
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
  tableName: "ProcedimentoOpmes",
  timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
})
class ProcedimentoOpme extends Model<ProcedimentoOpme> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  codigo: string;

  @Column(DataType.NUMBER)
  qtde_solicitada: number;

  @Column(DataType.STRING)
  divergencia: string;

  @Column(DataType.STRING)
  descricao: string;

  @Column(DataType.NUMBER)
  qtd_sugerida: number;

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

export default ProcedimentoOpme;

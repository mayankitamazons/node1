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
  tableName: "ProcedimentoLaudos",
  timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
})
class ProcedimentoLaudo extends Model<ProcedimentoLaudo> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  codigo: string;

  @Column(DataType.STRING)
  divergencia: string;

  @Column(DataType.STRING)
  titulo_descricao: string;

  @Column(DataType.STRING)
  descricao: string;

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

export default ProcedimentoLaudo;

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
  HasMany
} from "sequelize-typescript";
import Beneficiario from "./Beneficiario";
import ProcedimentoOpme from "./ProcedimentoOpme";
import ProcedimentoLaudo from "./ProcedimentoLaudo";

@Table({
  tableName: "Procedimentos",
  timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
})
class Procedimento extends Model<Procedimento> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  admin: string;

  @Column(DataType.BOOLEAN)
  prioridade: boolean;

  @Column(DataType.STRING)
  procedimento: string;

  @Column(DataType.STRING)
  processo: string;

  @Column(DataType.STRING)
  fase: string;

  @Column(DataType.STRING)
  operadora: string;

  @Column(DataType.STRING)
  atendimento: string;

  @Column(DataType.STRING)
  cid: string;

  @Column(DataType.STRING)
  nome_responsavel: string;

  @Column(DataType.STRING)
  email_responsavel: string;

  @Column(DataType.STRING)
  tel_responsavel: string;

  @HasMany(() => Beneficiario)
  beneficiarioInfo: Beneficiario[];

  @Column(DataType.STRING)
  nome_prestador: string;

  @Column(DataType.STRING)
  code_prestador: string;

  @HasMany(() => ProcedimentoOpme)
  opmeInfo: ProcedimentoOpme[];

  @HasMany(() => ProcedimentoLaudo)
  laudoInfo: ProcedimentoLaudo[];

  @Column(DataType.STRING)
  data_inicio: string;

  @Column(DataType.STRING)
  data_previsao: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Procedimento;

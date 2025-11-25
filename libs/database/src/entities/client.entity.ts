import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { AUDIT_STATUS } from '../../../constants/authentication/userConstants';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  clientId: string;

  // 🔗 User Who Created The Client
  @ManyToOne(() => User, user => user.clients, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  createdBy: User;

  // ==============================
  // 📌 Client Details
  // ==============================

  @Column()
  legal_entity_name: string;

  @Column()
  trading_name: string;

  @Column()
  county_name: string;

  @Column()
  state_name: string;

  @Column()
  city_name: string;

  @Column()
  street_name: string;

  @Column()
  zip_name: string;

  @Column()
  nature_of_business: string;

  @Column()
  website_domain_url: string;

  @Column()
  type_of_business: string;

  // ==============================
  // 📌 Contact Information
  // ==============================

  @Column()
  contact_name: string;

  @Column()
  designation: string;

  @Column()
  contact_email: string;

  @Column()
  phone: string;

  @Column({ type: 'text', nullable: true })
  technical_contacts: string;

  @Column({ type: 'text', nullable: true })
  information_security_officer: string;

  @Column({ type: 'text', nullable: true })
  client_signoff_authority: string;

  // ==============================
  // 📌 Assessment Details
  // ==============================

  @Column()
  assessment_project_name: string;

  @Column()
  assessment_type: string;

  @Column()
  assessment_category: string;

  @Column()
  assessment_year: string;

  @Column()
  pci_dss_version_application: string;

  @Column()
  assessment_period_covered: string;

  @Column({ type: 'date' })
  audit_start_date: Date;

  @Column({ type: 'date' })
  audit_end_date: Date;

  @Column({ type: 'date' })
  date_of_report_submission: Date;

  @Column({
          type: 'enum',
          enum: AUDIT_STATUS,
    })
  audit_status: AUDIT_STATUS;

  // ==============================
  // 📌 Certificate Details
  // ==============================

  @Column({ type: 'date', nullable: true })
  certificate_issue_date: Date;

  @Column({ type: 'date', nullable: true })
  certificate_expiry_date: Date;

  @Column({ nullable: true })
  certificate_number_unique_id: string;

  @Column({ type: 'date', nullable: true })
  next_audit_due_date: Date;

  @Column()
  name_of_qsa: string;

  @Column()
  qsa_license_certificate_number: string;

  @Column()
  audit_manager_reviewer_name: string;

  // ==============================
  // 📌 Assessment Scope
  // ==============================

  @Column({ type: 'text', nullable: true })
  scope_of_assessment: string;

  @Column({ type: 'text', nullable: true })
  location_of_scope: string;

  @Column()
  overall_compliance_status: string;

  @Column()
  compensating_controls_used: string;

  @Column()
  customized_approach_used: string;

  @Column()
  non_conformities_gap: string;

  @Column()
  non_conformities_gap_identified: string;

  // ==============================
  // 📌 Remediation
  // ==============================

  @Column({ type: 'date', nullable: true })
  remediation_target_date: Date;

  @Column({ type: 'date', nullable: true })
  revalidation_date: Date;

  // ==============================
  // 📌 Meta
  // ==============================

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import { IsString, IsEmail, IsOptional, IsDateString, IsUUID, IsEnum } from 'class-validator';

import { AUDIT_STATUS } from "libs/constants/authentication/userConstants";

export class CreateClientDto {
  // ==============================
  // 🔗 User Relationship
  // ==============================

  // ==============================
  // 📌 Client Details
  // ==============================
  @IsString()
  legal_entity_name: string;

  @IsString()
  trading_name: string;

  @IsString()
  county_name: string;

  @IsString()
  state_name: string;

  @IsString()
  city_name: string;

  @IsString()
  street_name: string;

  @IsString()
  zip_name: string;

  @IsString()
  nature_of_business: string;

  @IsString()
  website_domain_url: string;

  @IsString()
  type_of_business: string;

  // ==============================
  // 📌 Contact Information
  // ==============================
  @IsString()
  contact_name: string;

  @IsString()
  designation: string;

  @IsEmail()
  contact_email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  technical_contacts?: string;

  @IsOptional()
  @IsString()
  information_security_officer?: string;

  @IsOptional()
  @IsString()
  client_signoff_authority?: string;

  // ==============================
  // 📌 Assessment Details
  // ==============================
  @IsString()
  assessment_project_name: string;

  @IsString()
  assessment_type: string;

  @IsString()
  assessment_category: string;

  @IsString()
  assessment_year: string;

  @IsString()
  pci_dss_version_application: string;

  @IsString()
  assessment_period_covered: string;

  @IsDateString()
  audit_start_date: string;

  @IsDateString()
  audit_end_date: string;

  @IsDateString()
  date_of_report_submission: string;

  @IsEnum(AUDIT_STATUS)
  audit_status: AUDIT_STATUS;

  // ==============================
  // 📌 Certificate Details
  // ==============================
  @IsOptional()
  @IsDateString()
  certificate_issue_date?: string;

  @IsOptional()
  @IsDateString()
  certificate_expiry_date?: string;

  @IsOptional()
  @IsString()
  certificate_number_unique_id?: string;

  @IsOptional()
  @IsDateString()
  next_audit_due_date?: string;

  @IsString()
  name_of_qsa: string;

  @IsString()
  qsa_license_certificate_number: string;

  @IsString()
  audit_manager_reviewer_name: string;

  // ==============================
  // 📌 Assessment Scope
  // ==============================
  @IsString()
  scope_of_assessment: string;

  @IsString()
  location_of_scope: string;

  @IsString()
  overall_compliance_status: string;

  @IsString()
  compensating_controls_used: string;

  @IsString()
  customized_approach_used: string;

  @IsString()
  non_conformities_gap: string;

  @IsString()
  non_conformities_gap_identified: string;

  // ==============================
  // 📌 Remediation
  // ==============================
  @IsOptional()
  @IsDateString()
  remediation_target_date?: string;

  @IsOptional()
  @IsDateString()
  revalidation_date?: string;
}
